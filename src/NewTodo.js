import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
    constructor(props) {
        super(props)
        
    }


  render() {
    return (
        <form onSubmit ={this.props.adding}>
            <h2><label>To Do</label></h2>
            <button type="submit" id="add-button">+</button>  
            <input value={this.props.input} onChange={this.props.onChange} type="text" id="todo-name" />  
        </form> 
        
    );
  }
}

export default NewTodo;