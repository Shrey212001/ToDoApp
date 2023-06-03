import React from "react";
import "./style.css";

export default function DeleteButton({handleDelete}){
    return(
          <button onClick={handleDelete} >Delete</button>
    );
}