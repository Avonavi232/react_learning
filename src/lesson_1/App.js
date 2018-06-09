import React from 'react';
import './style.css';
// import { hot } from 'react-hot-loader';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from "./reducers/index";
import {addNewUser} from "./actions/index";
import Chat from './Chat';

const loggerMiddleware = store => next => action => {
	console.log('trigger', action);
	const result = next(action);
	console.log('store after action', store.getState());

	return result;
};

const checkUserMiddleware = store => next => action => {
	if (action.type === 'CONNECTED_NEW_USER') {
		new Promise(resolve => {
			setTimeout(() => {
				resolve()
			}, 1500);
		})
				.then(() => {
					store.dispatch(addNewUser())
				});
	}
	return next(action);
};

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, checkUserMiddleware, thunk));
window.store = store;

class App extends React.Component {
	render() {
		return (
				<Provider store={store}>
					<div className="App">
						<Chat/>
					</div>
				</Provider>
		);
	}
}

export default App;
