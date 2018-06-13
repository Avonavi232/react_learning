import React from 'react';

import PeoplesList from './PeoplesList';
import MessagesList from './MessagesList';
import authHOC from './authHOC';

class ChatWrap extends React.Component{
    render(){
        return(
            <div>
                <PeoplesList/>
                <MessagesList ws={this.props.ws}/>
            </div>
        )
    }
}

export default authHOC(ChatWrap);