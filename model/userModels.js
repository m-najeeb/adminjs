import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  avatar: { type: String },
  name: { type: String },
  email: { type: String, lowercase: true },
  password: { type: String },
  phone: { type: String }
});

const UserSchema = mongoose.model("User", userSchema);
export { UserSchema };
