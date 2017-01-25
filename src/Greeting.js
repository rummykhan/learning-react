import React, { Component } from 'react';

class UserGreeting extends Component{
    render(){
        return (
            <div>
                <h1>Hi user X!</h1>
            </div>
        );
    }
}

class GuestGreeting extends Component{
    render(){
        return (
            <div>
                <h1>Hi Guest!</h1>
            </div>
        );
    }
}

class Greeting extends Component{
    constructor(props){
        super(props);
        this.state = { isLoggedIn: props.isLoggedIn };
    }

    componentWillReceiveProps(nextProps){
        this.setState({isLoggedIn: nextProps.isLoggedIn});
    }

    render(){
        const { isLoggedIn } = this.state;

        if( isLoggedIn ){
            return (<UserGreeting />)
        }

        return (<GuestGreeting />)
    }
}

module.exports = {
    UserGreeting,
    GuestGreeting,
    Greeting
};