import React, { Component } from 'react';

class LoginButton extends Component{
    constructor(props){
        super(props);
        this.state = { handleClick: props.onClick };
    }
    
    render(){
        return (
            <button type="button" onClick={this.state.handleClick}>
                Login
            </button>
        )
    }
}

export default LoginButton;