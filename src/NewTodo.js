import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
        <form id="first">
            <h2><label>To Do</label></h2>
            <input type="text" id="todo-name" />
            <ul id="todo-list-elements"></ul>
        </form> 
        
    );
  }
}

export default NewTodo;