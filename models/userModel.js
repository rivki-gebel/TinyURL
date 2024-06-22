import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: ""
  },
  email:{
    type: String,
    required: true,
    default: ""
  },
  password:{
    type: String,
    required: true,
    default: ""
  },
  links:{
    type:Array,
    required: true,
    default: ""
  },
});

export default mongoose.model("user", UserSchema);
