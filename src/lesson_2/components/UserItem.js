import React from 'react';

export default class UserItem extends React.Component {
    render(){
        const {user} = this.props;
        return(
            <li className="clearfix">
                <img src={user.avatar} alt="avatar"/>
                <div className="about">
                    <div className="name">{user.userName}</div>
                    <div className="status">
                        <i className="fa fa-circle online"></i> {user.status || "online"}
                    </div>
                </div>
            </li>
        )
    }
}