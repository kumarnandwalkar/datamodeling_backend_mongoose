import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);

// till now we have learnt how to create documents but we havent learnt how to realte those documents with each other, in mongoDB realtions does not work same as mysql in mysql we have one to one, many to one, many to many, but in mongo we have a bit different system and is a bit easy
