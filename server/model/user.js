const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});
const user = mongoose.module("user", userShema);

module.exports = user;
