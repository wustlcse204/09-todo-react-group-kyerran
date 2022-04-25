import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], input: '' };
    this.addTodo = this.addTodo.bind(this);
    this.onChange  = this.onChange.bind(this);
    this.sortTodo = this.sortTodo.bind(this);

  }
  //sorting alphabetically
  sortTodo() {
    const self = this;
    var todos = self.state.todos;
    todos.sort(function (a, b) {
      return a.text.localeCompare(b.text);
    })
    self.setState({todos: todos});
  }
  
  


   //addTodo
  addTodo(event) {
    const self = this;
    const newTodoText = this.state.input;

   event.preventDefault();
    console.log(event);
    //var text = " ";
    //var text = document.getElementById("todo-name").value;
    var xhttp2 = new XMLHttpRequest();
    var data = {
        text: newTodoText
    }
  
    // Response handler
    xhttp2.onreadystatechange = function () {

        // Wait for readyState = 4 & 200 response
        if (this.readyState == 4 && this.status == 200) {

            // parse JSON response
            //var todo = JSON.parse(this.responseText);
          
            self.setState({
              todos: [...self.state.todos, JSON.parse(this.responseText)]
            })
           self.sortTodo();
        } else if (this.readyState == 4) {

            // this.status !== 200, error from server
            console.log(this.responseText);

        }
    };

    xhttp2.open("POST", "https://cse204.work/todos", true);

    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key", "bc8fd5-ac8f4e-405c92-d79619-a294e4");
    xhttp2.send(JSON.stringify(data));

    self.setState({input: " "});
  }


  componentDidMount() {
    //make initial AJAX call to list todos
    const self = this;
      //document.getElementById("todo-list-elements").innerHTML = " ";
      var xhttp = new XMLHttpRequest();
  
      xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              var todos = JSON.parse(this.responseText);
              self.setState({todos: todos});
              console.log(todos);
        
          }
      };
  
      xhttp.open("GET", "https://cse204.work/todos", true);
      xhttp.setRequestHeader("x-api-key", "bc8fd5-ac8f4e-405c92-d79619-a294e4");
      xhttp.send();
      
  }

  onChange(event) {
    // Set the state to the value of the input
    const self = this;
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="title">
        <h1>To Do App</h1>
      <div className="container">
        <div className="row" id="todo-list">
          <div className="col">
              <section id="myTodos">
              <div>
              <button onClick={this.sortTodo} id="sort">Sort</button>
            </div>
                <NewTodo newTodo={this.newTodo} onChange={this.onChange} input={this.state.input} adding={this.addTodo} />
                {
                  this.state.todos.map((todo) => 
                   <Todo key={todo.id} id={todo.id} text={todo.text} todos={this.state.todos} completed={todo.completed}/>
                  ) 
                }
             </section>
          </div>
        </div>
      </div>  
    </div>
    );
  }
}

export default App;
