import React from 'react';
import './assets/styles/chat.css';
import './assets/styles/style.css';
import {Provider} from 'react-redux';

import store from "./store";
import ChatWrap from './containers/ChatWrap';
import wsInit from "./util/ws";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.wsUrl = 'ws://localhost:5000';
        this.ws = wsInit(this.wsUrl, store);
        window.ws = this.ws;
    }


    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="container clearfix">
                        <ChatWrap ws={this.ws}/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
