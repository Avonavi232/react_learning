export const CONNECTED_NEW_USER = 'CONNECTED_NEW_USER';

export const connectedNewUser = (userName, userID) => {
    return ({
        type: 'CONNECTED_NEW_USER',
        userName,
        userID
    })
};