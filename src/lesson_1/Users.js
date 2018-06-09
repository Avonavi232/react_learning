import React from 'react';

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

class Users extends React.Component {
	handleClick = () => {
		this.props.addNewUser();
	};

	render(){
		const {users, addNewUser} = this.props;
		return(
				<div className="users">
					<h3 className="users__title">Online users:</h3>
					<ul className="users__list">
						{
							users.map((user, index) =>
									<li className="users__user" key={index}><span>{user}</span></li>
							)
						}
					</ul>
					<button onClick={this.handleClick}>Add new user</button>
				</div>
		)
	}
}

export default Users;