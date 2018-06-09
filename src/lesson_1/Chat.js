import React from 'react';
import faker from 'faker';
import {connect} from 'react-redux';

import Users from './Users';
import Messages from './Messages';
import {addNewUser, addMessage} from "./actions/index";

const mapStateToProps = state => {
	return {
		users: state.users,
		messages: state.messages,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addNewUser: () => dispatch(addNewUser()),
		addNewMessage: (author, message, timestamp) => dispatch(addMessage(author, message, timestamp))
	};
};

class Chat extends React.Component {
	render() {
		const {users, messages} = this.props;
		return (
				<div className="chat">
					<Messages addNewMessage={this.props.addNewMessage} messages={messages}/>
					<Users users={users} addNewUser={this.props.addNewUser}/>
				</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);