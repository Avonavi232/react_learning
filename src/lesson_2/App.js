import React from 'react';
import './assets/styles/chat.css';
import './assets/styles/style.css';
import {Provider} from 'react-redux';

import store from "./store";
import ChatWrap from './containers/ChatWrap';
import {wsInit} from "./util/ws";

// localStorage.removeItem('auth');

class App extends React.Component {
	constructor(props){
		super(props);
		this.wsUrl = 'ws://localhost:5000';
	}

	componentDidMount(){
		this.ws = wsInit(this.wsUrl);
		window.ws = this.ws;
	}

	render() {
		return (
				<Provider store={store}>
					<div className="App">
						<div className="container clearfix">
							<ChatWrap/>
						</div>
					</div>
				</Provider>
		);
	}
}

export default App;
