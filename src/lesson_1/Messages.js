import React from 'react';
import faker from 'faker';

// import {connect} from 'react-redux';
//
// const mapStateToProps = state => {
// 	return {users: state};
// };
//
// const mapDispatchToProps = dispatch => {
// 	return {
// 		addNewUser: (userName) => dispatch({
// 			type: 'ADD_NEW_USER',
// 			userName
// 		})
// 	};
// };

class Messages extends React.Component {
	handleSubmit = (event) => {
		event.preventDefault();
		const message = event.target.message.value;
		this.props.addNewMessage(faker.internet.userName(), message, Date.now());
	};

	render() {
		const {messages} = this.props;
		return (
				<form onSubmit={this.handleSubmit} className="messages-form">
					<div className="messages">
						{
							messages ?
									messages.map((message, index) => {
										const d = new Date(message.timestamp);
										const dateStr = `${d.getDate()}/${d.getMonth() + 1} ${d.getHours()}:${d.getMinutes()} `;
										return (
												<p key={index} className="message">
													<span className="message__date">{dateStr}</span>
													<span className="message__author">{message.author}</span>
													<span className="message__content"> {message.text}</span>
												</p>
										)
									}) :
									<div>История сообщений</div>
						}
						<input name="message" type="text" className="messages__input input"/>
					</div>
				</form>
		)
	}
}

export default Messages;