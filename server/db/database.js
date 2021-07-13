import Mongoose from 'mongoose';
import { config } from '../config.js';


export function connectDB(){
  return Mongoose.connect(config.db.host,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
}

//Todo(Jisoo): Delete below

let db;
export function getUsers() {
  return db.collection('users');
}

export function getTweets() {
  return db.collection('tweets');
}