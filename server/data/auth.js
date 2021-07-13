import MongoDb from 'mongodb';
import { getUsers } from '../db/database.js'; 

const ObjectID = MongoDb.ObjectID;

export async function findByUsername(username) {
  return getUsers().find({ username })
  // access first data (cursor)
  .next()
  .then(mapOptionalUser);
}

export async function findById(id){
  return getUsers()
  .find({ _id: new ObjectID(id) })
  .next()
  .then(mapOptionalUser);
}

export async function createUser(user){
  return getUsers().insertOne(user)  
  .then((result) => result.ops[0]._id.toString()); // Object -> String
}

// Object id -> _id convert 
function mapOptionalUser(user){
  return user? {...user, id: user._id.toString()} : user;
}
