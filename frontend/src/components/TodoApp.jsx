import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./style.css";


export default function TodoApp(){
    
const [todos,setTodos]=React.useState(null);

React.useEffect(()=>{
    fetch("http://localhost:8000/todos")
    .then(data=>data.json())
    .then(setTodos)
    .catch(console.log);
});

function handleAdd(description){
    const todo={description: description, done:false }
    fetch("http://localhost:8000/todos",
    {
        method: "POST",
        body:JSON.stringify(todo),
        headers:{ 'Content-Type':'application/json'}
    }).then(data=>data.json())
    .then(todo=>setTodos([...todos,todo]))
    .catch(console.log)
};

function handleDelete(id){
 fetch(`http://localhost:8000/todo/${id}`,
 {
    method:"DELETE"
}).then(data=>data.json())
.then(todo=>setTodos(todos.filter(t=>t._id!=todo._id)))
.catch(console.log)
}

    return (
        <>
        <TodoForm handleAdd={handleAdd} />
          <TodoList todos={todos} handleDelete={handleDelete} />
        </>
    );
}