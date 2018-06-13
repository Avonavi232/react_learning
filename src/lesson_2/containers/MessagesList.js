import React from 'react';
import {connect} from 'react-redux';

import ChatHeader from '../components/ChatHeader';
import MessageItem from '../components/MessageItem';
import ChatControl from '../components/ChatControl';

class MessagesList extends React.Component {
	constructor(props){
		super(props);

		this.ul = null;
		this.chatWrap = null;
	}

	componentDidUpdate(){
		this.chatWrap.scrollTop = this.ul.scrollHeight;
	}

    handleSendMessage = (message) => {
        this.props.ws.ws.send(message);
	};

	render(){
		const {messages} = this.props;
		return(
				<div className="chat">
					<ChatHeader/>

					<div className="chat-history" ref={el => this.chatWrap = el}>
						<ul ref={el => this.ul = el}>
							{
								messages.length &&
									messages.map((message, index) =>
										<MessageItem key={index} message={message} />
									)
							}

							{/*<li className="clearfix">*/}
								{/*<div className="message-data align-right">*/}
									{/*<span className="message-data-time">10:10 AM, Today</span>*/}
									{/*<span className="message-data-name">Olia</span> <i className="fa fa-circle me"></i>*/}

								{/*</div>*/}
								{/*<div className="message other-message float-right">*/}
									{/*Hi Vincent, how are you? How is the project coming along?*/}
								{/*</div>*/}
							{/*</li>*/}

							{/*<li>*/}
								{/*<div className="message-data">*/}
									{/*<span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>*/}
									{/*<span className="message-data-time">10:12 AM, Today</span>*/}
								{/*</div>*/}
								{/*<div className="message my-message">*/}
									{/*Are we meeting today? Project has been already finished and I have results to show you.*/}
								{/*</div>*/}
							{/*</li>*/}

							{/*<li className="clearfix">*/}
								{/*<div className="message-data align-right">*/}
									{/*<span className="message-data-time">10:14 AM, Today</span>*/}
									{/*<span className="message-data-name">Olia</span> <i className="fa fa-circle me"></i>*/}

								{/*</div>*/}
								{/*<div className="message other-message float-right">*/}
									{/*Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any*/}
									{/*problems at the last phase of the project?*/}
								{/*</div>*/}
							{/*</li>*/}

							{/*<li>*/}
								{/*<div className="message-data">*/}
									{/*<span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>*/}
									{/*<span className="message-data-time">10:20 AM, Today</span>*/}
								{/*</div>*/}
								{/*<div className="message my-message">*/}
									{/*Actually everything was fine. I'm very excited to show this to our team.*/}
								{/*</div>*/}
							{/*</li>*/}

							{/*<li>*/}
								{/*<div className="message-data">*/}
									{/*<span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>*/}
									{/*<span className="message-data-time">10:31 AM, Today</span>*/}
								{/*</div>*/}
								{/*<i className="fa fa-circle online"></i>*/}
								{/*<i className="fa fa-circle online" style={{color: '#AED2A6'}}></i>*/}
								{/*<i className="fa fa-circle online" style={{color:'#DAE9DA'}}></i>*/}
							{/*</li>*/}
						</ul>
					</div>

					<ChatControl handleSendMessage={this.handleSendMessage}/>
				</div>
		)
	}
}

const mapStateToProps = state => {
	return ({
        messages: state.messages
	})
};

const mapDispatchToProps = dispatch => {
	return {dispatch};
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);