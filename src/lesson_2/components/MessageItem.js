import React from 'react';

const colors = {
    green: '#86BB71',
    blue: '#94C2ED',
    orange: '#E38968',
    gray: '#92959E',
    red: '#f56359',
    magenta: '#e039f5',
    purple: '#9939f5',
    plum: '#550ff5',
};

export default class MessageItem extends React.Component {
    render() {
        const {time, text, author, color} = this.props.message;
        return (
            <li className="clearfix">
                <div className="message-data align-right">
                    <span className="message-data-time"> {time} </span>
                    <span className="message-data-name"> {author} </span> <i className="fa fa-circle me"></i>
                </div>
                <div style={{backgroundColor: colors[color]}} className="message other-message float-right">{text}</div>
            </li>
        )
    }
}