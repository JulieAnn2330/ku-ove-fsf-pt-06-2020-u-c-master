const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is required."
  },

  password: {
    type: String,
    trim: true,
    required: "Password is required.",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  date: {
    type: Date,
    default: Date.now
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
