import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema
(
  {
    content : {
      type : String,
      required : true
    },
    complete : {
      type : Boolean,
      default : false
    },

    // now we also want functionality of allowing multiple users to edit in this
    createdBy : {
      type : mongoose.Schema.Types.ObjectId, // mongoose.Schema.Types.ObjectId will tell us which user created/ edited the todo by saving the objectId of that perticular user and that objectId is taken from mongoose and by using the schema of that perticular model
      ref : "User" // here the red name should be same as the model name written in export to give the refrence to mongoose.schema that which models schema is being used and that ref should be correct
    }, 
    subTodos : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "SubTodo"
    }
  ] // we defined an array here to store all the subtodos created by the user
    // it will save every subtodo created in the model SubTodo and will also keep all the subtodos in track cuz they all are written in an array
  }, { timestamps: true }
); // first curly brace is for data and second curly brace is for timestamp

export const Todo = mongoose.model('Todo', todoSchema);
// bydefault we take variable name and model name same to avoid confusion but we can take diff also
// model takes 2 parameters, name and from where to load schema
// name in DB will be Todos
