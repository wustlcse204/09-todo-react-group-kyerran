import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return ( 
      <div className="App"> 
      <h1>To Do App</h1>
      <ul id="todo-list-elements"></ul>
      </div>
    );
  }
}

export default Todo;
