import React from 'react';
import {connect} from 'react-redux';

import UserItem from '../components/UserItem';
import Searchbar from '../components/Searchbar';

class PeoplesList extends React.Component {
	render(){
		const {users} = this.props;
		return(
				<div className="people-list" id="people-list">
					<Searchbar />
					<ul className="list">
						{
							(Array.isArray(users) && users.length) &&
									users.map((user, index) => {
										user.avatar = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg';

										return (
                                            <UserItem key={user.userID} user={user}/>
										)
									})
						}
					</ul>
				</div>
		)
	}
}

const mapStateToProps = state => {
	return({
		users: state.users
	});
};

const mapDispatchToProps = dispatch => {
	return {dispatch};
}



export default connect(mapStateToProps, mapDispatchToProps)(PeoplesList);