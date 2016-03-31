import DbModel from '../db/model';

var UserSchema = new Schema({
  username: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
}, {
  toJSON: {
    transform: function(doc, ret, options) {
      delete ret.password;
    },
  },
});


mongoose.model("User", UserSchema);

class User extends DbModel {
  constructor(){
    super(this);
  }
}

User.username = { type: String, required: true, unique: true, lowercase: true };
User.password = { type: String, required: true };

export default User;