const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    res.status(401).json({ message: "no token, authorization" });
  }
  try {
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token is not valid" });
  }
};

module.exports = auth;
