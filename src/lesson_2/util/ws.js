import {connectedNewUser, userDisconnected, gotMessage} from "../actions";

 const wsInit = (wsUrl, store) => {
    const ws = new WebSocket(wsUrl);


    ws.addEventListener('open', () => {
        console.log('WebSocket connection established');
    });

    ws.addEventListener('message', responce => {
        console.log("ws message: ", responce.data);

        const data = JSON.parse(responce.data);

        switch (data.type) {
            case 'connected_new_user':
                store.dispatch(connectedNewUser(data));
                break;

            case 'user_disconnected':
                store.dispatch(userDisconnected(data));
                break;

            case 'got_message':
                store.dispatch(gotMessage(data.data));
                break;

            default:
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

export default wsInit;
