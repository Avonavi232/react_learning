import {combineReducers} from 'redux';
import {USER_CONNECTED, USER_DISCONNECTED, GOT_MESSAGE} from "../actions";

export const chatReducer = (state = [], action) => {

	switch (action.type) {
		case GOT_MESSAGE:
            console.log(action);
            return state.concat({
                time: action.time,
                text: action.text,
                author: action.author,
                color: action.color,
                userID: action.userID,
            });

		default:
            return state;
	}
};

export const peopleReducer = (state = [], action) => {
	switch (action.type) {
		case USER_CONNECTED:
            return state.concat({
                userName: action.userName,
                id: action.userID
            });

        case USER_DISCONNECTED:
            return state.filter(user => user.id !== action.userID);

        default:
            return state;
	}

};

export const reducer = combineReducers({
	users: peopleReducer,
	messages: chatReducer
});