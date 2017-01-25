import React, { Component } from 'react';

class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = { toggleOn: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState( prevState => ({
            toggleOn: !prevState.toggleOn
        }));
    }

    render(){
        return (
            <div>
                <a href="#" onClick={ this.handleClick }>
                    { this.state.toggleOn ? 'ON' : 'OFF' }
                </a>
            </div>
        );
    }
}

export default Toggle;