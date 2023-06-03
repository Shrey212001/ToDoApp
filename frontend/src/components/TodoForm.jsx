import React from "react";
import "./style.css";

export default function TodoForm({handleAdd}){
    const [description,setDescription]=React.useState("");
    return (
        <div className="container">
       <form onSubmit={e=> e.preventDefault()} className="drop" >
        <label htmlFor="description">Description</label>
        <input placeholder="Add ToDo" type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} />
        <button onClick={()=>handleAdd(description)}  className="btns">Add todo</button>
       </form>
       </div>
    );
}