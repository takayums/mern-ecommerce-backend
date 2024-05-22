const User = require("../models/user");
const createSecretToken = require("../utils/secretToken");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const { email, name, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "Please enter all filed" });
  }

  const exitsUser = await User.findOne({ email });

  if (exitsUser) {
    res.json({ message: "User already exists" });
  } else {
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
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({ message: "Please enter all fields" });
  }

  const user = await User.findOne({ email });

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(401).json({ message: "Password invalid" });
    } else {
      const token = createSecretToken(user._id);

      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });

      res.status(200).json({
        data: {
          name: user.name,
          email: user.email,
          token: token,
        },
        message: "Login Successfully",
      });
    }
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
};

module.exports = { signUp, login };
