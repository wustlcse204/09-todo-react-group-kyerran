import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    //create constructor -> bind 
    //underneath add a delete function and complete
    //AJAX calls inside

    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this);
        this.complete = this.complete.bind(this);
        this.state = {completed:this.props.completed};
    }

    delete(event) {
        event.preventDefault();
        const self = this;
        console.log(event.target.parentNode.parentNode);
        var todo = event.target.parentNode.parentNode.id;
        var xhttp3 = new XMLHttpRequest();
    
        xhttp3.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //remove todo from list using a filter tonly return list items != to todo.id 
                //of what we want to remove
                const remainingTodos = self.props.todos.filter((todo) => {
                    if (todo.id !== todo) {
                        return todo;
                    }
                });
                const todos = self.props.todos;
                self.setState({todos:  remainingTodos});
                window.location.reload();
               
                console.log(todo);
             
                
            }
            
            else if (this.readyState == 4) {
    
                // this.status !== 200, error from server
                console.log(this.responseText);
    
            }
        };
    
        xhttp3.open("DELETE", "https://cse204.work/todos/" + todo, true);
        xhttp3.setRequestHeader("x-api-key", "bc8fd5-ac8f4e-405c92-d79619-a294e4");
        xhttp3.send();
    }

    complete(event) {

    event.preventDefault();
    console.log(event.target.parentNode.parentNode);
    const self = this;

    var xhttp5 = new XMLHttpRequest();
    
    //var completed = false;  
    if(event.target.checked) {
        console.log("hello");
        //completed = true;
        var data = {
            completed: true
        }
    }
    else {
        //completed = false;
        var data = {
            completed: false
        }
    }
    
    var todo = event.target.parentNode;
    var id = event.target.parentNode.parentNode.id;
    console.log(event.target.parentNode.parentNode);
    var text = this.props.text;
    xhttp5.onreadystatechange = function () {
    // Wait for readyState = 4 & 200 response
    if (this.readyState == 4 && this.status == 200) {
        // parse JSON response
        //var todo = JSON.parse(this.responseText);
        console.log(this.readyState);
        self.setState({completed: true});
        console.log(data);
        console.log(todo);
        if (todo.completed) {
            console.log("enter if of display");
            console.log(text);
            todo.classList.toggle("crossed-line");
            //event.target.checked = true;
        }
        else {
            todo.classList.toggle("crossed-line");
            //event.target.checked = false;
        }
       
    } else if (this.readyState == 4) {

        // this.status !== 200, error from server
        console.log("error");
        console.log(todo);
        console.log(text);

    } else {
        console.log("Ready State: "  + this.readyState);
        console.log("status: "  + this.status)
        console.log(text);
        console.log(todo);
        console.log(id);
        console.log("error2");
    }
};
    xhttp5.open("PUT", "https://cse204.work/todos/" + id, true);
    xhttp5.setRequestHeader("Content-type", "application/json");
    xhttp5.setRequestHeader("x-api-key", "bc8fd5-ac8f4e-405c92-d79619-a294e4");
    xhttp5.send(JSON.stringify(data));
    }


    render() {
    return (
            <div id={this.props.id} className="todo-one">
                    <p>
                        <input type="checkbox" onClick={this.complete}  />
                        {this.props.text}
                        <button type="button" onClick={this.delete}>Delete</button>
                    </p>
                   
            </div>
    );
  }
}


export default Todo;
