import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  render() {
    return (
      <div className="title">
        <h1>To Do App</h1>
      <div className="container">
        <div className="row" id="todo-list">
          <div className="col">
            <button type="submit" id="add-button">+</button>  
            <NewTodo />
            <Todo /> 
          </div>
        </div>
      </div> 
    </div>
    );
  }
}

export default App;
