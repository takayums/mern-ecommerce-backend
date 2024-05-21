const User = require("../models/user");
const createSecretToken = require("../utils/secretToken");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const { email, name, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all filed" });
  }

  const exitsUser = await User.findOne({ email });

  if (exitsUser) {
    return res.json({ message: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    email: email,
    name: name,
    password: hashPassword,
  });
  const token = createSecretToken(newUser._id);

  res.cookie("token", token, {
    withCredentials: true,
    httpOnly: false,
  });

  res.status(201).json({
    token,
    user: { id: newUser._id, email: newUser.email, name: newUser.name },
    statu: "success",
    message: "Signup Successfully",
  });
};

const login = async (req, res) => {
  res.status(201).json({ status: "success", message: "Login Successfully" });
};

module.exports = { signUp, login };
