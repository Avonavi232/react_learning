import {combineReducers} from 'redux';
const initialUsersState = ['@john', '@alex', '@chris'];
const initialMessagesState = [
	{
		text: 'Hello World',
		timestamp: +new Date,
		author: '@alex'
	},
	{
		text: 'Hi Alex',
		timestamp: +new Date + 5000,
		author: '@Chris'
	}
];

export const usersReducer = (state = initialUsersState, action) => {
	if(action.type === 'ADD_NEW_USER') {
		return [...state, action.userName];
	}
	return state;
};


export const messagesReducer = (state = initialMessagesState, action) => {
	if(action.type === 'ADD_NEW_MESSAGE') {
		const newMessage = {
			text: action.text,
			author: action.author,
			timestamp: action.datetime,
		};
		return [...state, newMessage];
	}
	return state;
};



export default combineReducers({
	users:	usersReducer,
	messages:	messagesReducer
})
