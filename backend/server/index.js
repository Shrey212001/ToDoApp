const cors=require('cors');
const express=require('express');

const app=express();
app.use(cors());
app.use(express.json())

const { findAllTodos,findTodoById, addTodo, updateTodo, deleteTodo }=require("../persistence");

app.get("/todos",async(req,res)=> res.send(await findAllTodos()));
app.get("/todo/:id",async(req,res)=> res.send(await findTodoById(req.params.id)));

app.post("/todos",async(req,res)=>{
const todo=await addTodo(req.body);
return res.send(todo);
});

app.put("/todo/:id",async(req,res)=>{
    const todo=await updateTodo(req.params.id,req.body);
    return res.send(todo);
})

app.delete("/todo/:id",async(req,res)=>{
    const todo=await deleteTodo(req.params.id);
    return res.send(todo);
})
const start=({port,callback})=>app.listen(port,callback);



module.exports={start};