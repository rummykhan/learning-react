import React, { Component } from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount(){
        setInterval( () => this.tick(), 1000 );
    }

    componentWillUnmount(){

    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                <h1>Hello World,</h1>
                It is {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default Clock;