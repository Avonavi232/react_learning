import {combineReducers} from 'redux';

const initUsers = [
		'Alex',
		'John',
		'Sam',
		'George',
		'Andrew'
];

export const chatReducer = (state = [], action) => {
	return state;
};

export const peopleReducer = (state = initUsers, action) => {
	if (action.type === 'ADD_NEW_USER') {
		return state.concat('fake');
	} else {
		return state;
	}
};

export const reducer = combineReducers({
	users: peopleReducer,
	messages: chatReducer
});