import Mongoose from 'mongoose';
import { config } from '../config.js';


export function connectDB(){
  return Mongoose.connect(config.db.host,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
}

  // _id -> id
export function useVitualId(schema){
  schema.virtual('id').get(function(){
    return this._id.toString();
  });
  schema.set('toJSON', {virtuals: true});
  schema.set('toObject', {virtuals: true});
}

//Todo(Jisoo): Delete below

let db;

export function getTweets() {
  return db.collection('tweets');
}