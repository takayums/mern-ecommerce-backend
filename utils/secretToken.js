const jwt = require("jsonwebtoken");
require("dotenv").config();

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: `1h` });
};

module.exports = createSecretToken;
