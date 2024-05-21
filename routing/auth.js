const express = require("express");
const { signUp, login } = require("../controller/auth");

const router = express.Router();

router.post("/register", signUp);
router.post("/login", login);
router.get("/user");

module.exports = router;
