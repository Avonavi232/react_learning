import {combineReducers} from 'redux';
import {CONNECTED_NEW_USER} from "../actions";

export const chatReducer = (state = [], action) => {
	return state;
};

export const peopleReducer = (state = [], action) => {
	if (action.type === CONNECTED_NEW_USER) {
		return state.concat({
            userName: action.userName,
			id: action.userID
		});
	} else {
		return state;
	}
};

export const reducer = combineReducers({
	users: peopleReducer,
	messages: chatReducer
});