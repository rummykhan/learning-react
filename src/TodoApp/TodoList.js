import React, { Component } from 'react';

class TodoList extends Component{
    
    render(){
        return (
            <ul>
                {this.props.items.map( item => (
                    <li key={item.id}>
                        <a href="#" onClick={item.clicked}>{item.text}</a>
                    </li>
                ))}
            </ul>
        )
    }
}

export default TodoList;