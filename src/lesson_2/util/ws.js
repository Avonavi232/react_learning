import {connectedNewUser} from "../actions";


export const wsInit = (wsUrl, store) => {
    const ws = new WebSocket(wsUrl);


    ws.addEventListener('open', () => {
        console.log('WebSocket connection established');
    });

    ws.addEventListener('message', responce => {
        let messageObj;

        try{
            messageObj = JSON.parse(responce.data);
        } catch(e){
            console.log(`Ошибка парсинга json: ${e.message}`);
            return;
        }

        console.log("ws message: ", messageObj);

        switch (messageObj.type) {
            case 'connected_new_user':
                const {userName, userID} = messageObj;
                store.dispatch(connectedNewUser(userName, userID));
                break;
        }
    });


    let countReconnect = 0;
    const emit = message => {
        if (countReconnect > 5) {
            return;
        }

        if (ws.readyState === ws.CONNECTING) {
            setTimeout(() => {
                emit(message);
                countReconnect++;
            }, 500);
            return;
        }

        countReconnect = 0;
        ws.send(message);
    };

    return {ws, emit};
};
