import React, { Component } from 'react';

class LogoutButton extends Component{

    constructor(props){
        super(props);
        this.state = { handleClick: props.onClick };
    }

    render(){
        return (
            <button type="button" onClick={this.state.handleClick}>
                Logout
            </button>
        )
    }
}

export default LogoutButton;