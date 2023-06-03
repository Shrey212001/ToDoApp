import React from "react";
import DeleteButton from "./DeleteButton";
import "./style.css";

export default function Todo({todo,handleDelete}){
    
    return(

        <li >
            {todo.description}
        <DeleteButton handleDelete={handleDelete}/>
        </li>
        
    );
}