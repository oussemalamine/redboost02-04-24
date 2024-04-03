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
  department: String,
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
  adress: {
    type: String,
    default: "Undefined",
  },
  linkedIn: {
    type: String,
    default: "Undefined",
  },
  birthday: {
    type: String,
    default: "Undefined",
  },
  exp: {
    type: String,
    default: "Undefined",
  },
  matricule: {
    type: String,
    default: "Undefined",
  },
  cin: {
    type: String,
    default: "Undefined",
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
