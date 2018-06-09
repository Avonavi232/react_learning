import faker from 'faker';

export const addNewUser = () => {
	return dispatch => {
		const userName = `@${faker.internet.userName()}`;
		dispatch({
			type: 'ADD_NEW_USER',
			userName
		});
		dispatch(addMessage(userName, 'Hello World!', +new Date()));
	}
};

export const addMessage = (author, text, datetime) => {
	return {
		type: 'ADD_NEW_MESSAGE',
		author,
		text,
		datetime
	}
};