import React from 'react';

export default class ChatHeader extends React.Component{
    render(){
        return(
            <div className="chat-header clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar"/>

                <div className="chat-about">
                    <div className="chat-with">MainHall</div>
                </div>
                <i className="fa fa-star"/>
            </div>
        )
    }
}