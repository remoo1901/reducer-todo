import React from 'react';
import './Todo.css';
const moment = require('moment');

export default function Todo({ todo, toggleComplete }) {
    console.log(todo)
if(todo){
    return <li className={todo.completed ? 'completed' : ''} onClick={() => toggleComplete(todo.id)}>{todo.item} <span>...{moment(todo.timeCompleted).fromNow()}</span></li>;
} else return <h1>Loading..</h1>

}