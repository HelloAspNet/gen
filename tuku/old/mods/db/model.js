import mongoose from 'mongoose';


class Db {
  constructor(){
    var schema = new Schema({
      username: { type: String, required: true, unique: true, lowercase: true },
      password: { type: String, required: true },
    };
    mongoose.model()
  }
}


mongoose.model("User", UserSchema);

export default Db;