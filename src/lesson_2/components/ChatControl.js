import React from 'react';

export default class ChatControl extends React.Component{
    handleSendMessage = (event) => {
        event.preventDefault();
        const message = event.target.message.value;
        event.target.message.value = '';

        this.props.handleSendMessage(message);
    };


    render(){
        return(
            <div className="chat-message clearfix">
                <form action="#" onSubmit={this.handleSendMessage}>
                    <textarea name="message" placeholder="Type your message" rows="4"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}