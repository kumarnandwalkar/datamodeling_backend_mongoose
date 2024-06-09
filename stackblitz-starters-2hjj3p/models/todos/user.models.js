//  we have named this file as user.models.js we could have written users.js also but this is not a
// standart practice, in industry we generally create files that are named as filename.foldername.extension , varries company to company

// this is data modeling/ schema creation

// first we will study how mongoose makes models and how it exports it
import mongoose from 'mongoose';
// mongoose helps us to create schema
const userSchema = new mongoose.Schema(
  {
    // username : String,
    // email : String,
    // isactive : Boolean
    // the above one is also a format but we can also add some more functionalities to this and
    // is used in industry
    // we can define an object instead of just string
    username: {
      type: String, // first should be always type, we can also set min and max here
      required: true, // how long the username should be by passing an array
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      // we can also write a custom msg in required field
      required: [true, 'email is required'],
      unique: true,
      lowercase: true,
    },
    passwrord: {
      type: String,
      min: [6, 'must be atleast 6 chars'], // we can also send an error msg in db directly
      // due to such features mongoose is widely used
      required: true,
    },
  },
  { timestamps: true }
  // we can also the timestamps jo bataega kab user aaya kab gaya
  // and jab bhi hum timestamp create krenge tab 2 cheeje banegeni createdAt, updatedAt
);
// schema is a method which takes an object as parameter, this object contains the data
// the line 4 denotes that the schema has been created, now we need to export it (manditory) and will
// create it in mongodb
// now for exporting it
export const User = mongoose.model('User', userSchema); // here model method takes  two parameter
// one name of model and another schema
// IMP:
// we've given name for model as User but in mongo db it will be Users
// its a standard practice of mongodb to make the model names as a plural one by default
// its an indepth que asked by interviewer in interviews
