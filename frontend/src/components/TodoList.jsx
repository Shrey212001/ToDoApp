import React from "react";
import Todo from "./Todo";
import "./style.css";

export default function TodoList({todos,handleDelete}){
    
    return todos? (
        <ul>
            {todos.map(todo=><Todo handleDelete={()=> handleDelete(todo._id)} key={todo._id} todo={todo} />)}
        </ul>
        ): <p>Loading...</p>;
}