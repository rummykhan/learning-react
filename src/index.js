import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import X from './X'
// import Toggle from './Toggle';
import { Greeting } from './Greeting'
import LoginControl from './LoginControl';
import TodoApp from './TodoApp/TodoApp';
import './index.css';


ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
);