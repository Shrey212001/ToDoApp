const {start}=require("./server");

start({
    port:8000,
    callback:()=>console.log("Listening on port "+8000)
})