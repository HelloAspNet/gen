import mongoose from 'mongoose';

class Model{
   constructor(a){
      console.log(a.name)
   }
}



class User extends Model{
   constructor(){
      super(User)
   }
}


let attrs = {
   username: { type: String, required: true, unique: true, lowercase: true },
   password: { type: String, required: true }
};

var schema = new mongoose.Schema(attrs);


function _inherits


export default mongoose.model('User', schema);