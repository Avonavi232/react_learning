export const wsInit = wsUrl => {
    const ws = new WebSocket(wsUrl);

    ws.addEventListener('open', () => {
        console.log('WebSocket connection established');
    });

    ws.addEventListener('message', responce => {
        console.log(JSON.parse(responce.data));
    });
    return ws;
};
