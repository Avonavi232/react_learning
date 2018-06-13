export const USER_CONNECTED = 'USER_CONNECTED';
export const USER_DISCONNECTED = 'USER_DISCONNECTED';
export const GOT_MESSAGE = 'GOT_MESSAGE';

export const connectedNewUser = ({userName, userID}) => {
    return ({
        type: USER_CONNECTED,
        userName,
        userID
    })
};

export const userDisconnected = ({userID}) => {
    return ({
        type: USER_DISCONNECTED,
        userID
    })
};

export const gotMessage = ({time, text, author, color, userID}) => {
    return ({
        type: GOT_MESSAGE,
        time,
        text,
        author,
        color,
        userID
    })
};