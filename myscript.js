document.addEventListener("DOMContentLoaded", display, false);

//Listing all ToDos

function display() {
    document.getElementById("todo-list-elements").innerHTML = " ";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var todos = JSON.parse(this.responseText);
            for (i = 0; i < todos.length; i++) {
                const toDo = document.createElement("li");
                const info = document.createElement("p");
                const check = document.createElement("input");
                const erase = document.createElement("button");

                erase.innerText = "Delete";

                toDo.setAttribute("class", todos[i].id);

                erase.addEventListener("click", del);
                erase.setAttribute("id", todos[i].id);

                toDo.appendChild(erase);
                toDo.setAttribute("id", "list" + todos[i].id);
                check.setAttribute("type", "checkbox");

                toDo.appendChild(check);


                info.innerText = todos[i].text;


                toDo.appendChild(info);

                check.addEventListener("change", markOff);


                if (todos[i].completed) {
                    console.log("enter if of display");
                    toDo.style.textDecoration = 'line-through';
                }
                else {
                    toDo.style.textDecoration = 'none';
                }

                const element = document.getElementById("todo-list-elements");
                element.appendChild(toDo);
            }
            console.log(todos);
        }
    };

    xhttp.open("GET", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("x-api-key", "bc8fd5-ac8f4e-405c92-d79619-a294e4");
    xhttp.send();
}


// Setting variable for form input (get from HTML form)

document.getElementById("first").addEventListener("submit", post);

const adding = document.getElementById("add-button");
adding.addEventListener("click", post);

//display();

//Posting New ToDos
// Initalize AJAX Request
function post() {
    event.preventDefault();
    console.log(event);
    var text = " ";
    var text = document.getElementById("todo-name").value;
    var xhttp2 = new XMLHttpRequest();
    var data = {
        text: text
    }
    document.getElementById("todo-name").value = " ";
    // post todo item and grab text and id from cloud
    console.log(event.target);

    // Response handler
    xhttp2.onreadystatechange = function () {

        // Wait for readyState = 4 & 200 response
        if (this.readyState == 4 && this.status == 200) {

            // parse JSON response
            var todo = JSON.parse(this.responseText);

            console.log(todo);
            display();

        } else if (this.readyState == 4) {

            // this.status !== 200, error from server
            console.log(this.responseText);

        }
    };

    xhttp2.open("POST", "https://cse204.work/todos", true);

    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key", "bc8fd5-ac8f4e-405c92-d79619-a294e4");
    xhttp2.send(JSON.stringify(data));
}

// //Idea about adding todos
// const toDo = document.createElement("li");
// const element = document.getElementById("todo-list-elements");
// element.appendChild(toDo);

//delete a todo

function del(event) {
    event.preventDefault();
    console.log(event);
    var todo = event.target.id;
    var xhttp3 = new XMLHttpRequest();

    xhttp3.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByClassName(event.target.id)[0].remove;
            console.log(todo);
            display();
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


//line through the task if the checkbox is checked
function markOff(event) {
    event.preventDefault();
    console.log(event);

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
 /*
    var data = {
        completed: true
    }
    */
   // console.log(completed);

    var id = event.target.parentNode.className;
    console.log(id);
    
    xhttp5.onreadystatechange = function () {
    // Wait for readyState = 4 & 200 response
    if (this.readyState == 4 && this.status == 200) {
        // parse JSON response
        var todo = JSON.parse(this.responseText);
        console.log(data);
        console.log(todo);
        if (todo.completed) {
            console.log("enter if of display");
            document.getElementById("list" + todo.id).style.textDecoration = 'line-through';
        }
        else {
            document.getElementById("list" + todo.id).style.textDecoration = 'none';
        }
       // display();
    } else if (this.readyState == 4) {

        // this.status !== 200, error from server
        console.log("error");
        console.log(this.responseText);

    } else {
        console.log("Ready State: "  + this.readyState);
        console.log("status: "  + this.status)
        console.log(this.responseText);
        console.log("error2");
    }
};


    xhttp5.open("PUT", "https://cse204.work/todos/" + id, true);
    xhttp5.setRequestHeader("Content-type", "application/json");
    xhttp5.setRequestHeader("x-api-key", "bc8fd5-ac8f4e-405c92-d79619-a294e4");
    xhttp5.send(JSON.stringify(data));
}