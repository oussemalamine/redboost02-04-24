const mongoose = require("mongoose");

// Single Admin Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  role: String,
  password: {
    type: String,
    unique: true,
    required: true,
  },
  confirmation: {
    type: String,
    unique: true,
    required: true,
  },
  validation: {
    type: Boolean,
    default: false,
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
