import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
    <div className="App">
        <div className="container">
            <div className="row" id="todo-list">
                <div className="col">
                    <ul id="todo-list-elements">
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Todo;
