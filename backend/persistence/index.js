const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

(async()=>{
await mongoose.connect("mongodb://127.0.0.1:27017/Todo",{
    useNewUrlParser:true,
    useUnifiedTopology: true
});
})()

module.exports=require("./repository/todo.repository")