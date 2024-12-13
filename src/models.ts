import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  gender: String,
  name: { first: String, last: String },
  address: {
    city: String,
    state: String,
    country: String,
    street: { number: Number, name: String },
  },
  email: String,
  picture: { large: String },
});

export const User = mongoose.model("User", UserSchema);
