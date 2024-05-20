const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      lowercase: true,
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      required: [true, "Please enter a valid password"],
      type: String,
      minlength: [6, "Minimum password length mus be 6 caracters"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", user);
