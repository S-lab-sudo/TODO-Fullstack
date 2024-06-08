const mongoose=require('mongoose')
const todoModelSchema=mongoose.Schema({
    todotitle:{
        type:String,
        required:true
    }
})
const TodoModel=mongoose.model('todo',todoModelSchema)
module.exports=TodoModel