import React from 'react';

export default class Searchbar extends React.Component {
    render(){
        return(
            <div className="search">
                <input type="text" placeholder="search"/>
                <i className="fa fa-search"></i>
            </div>
        )
    }
}