import React, { Component } from 'react';
import Clock from './Clock';

class X extends Component{
    render(){
        return (
            <div>
                <Clock />
                <Clock />
                <Clock />
            </div>
        );
    }
}

export default X;