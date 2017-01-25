import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoApp extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = { items: [], text: '' };
    }

    handleChange(e){
        this.setState({text: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();

        var newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState( (prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }

    render(){
        return (
            <div>
                <h3>Todo App</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text} />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoApp;