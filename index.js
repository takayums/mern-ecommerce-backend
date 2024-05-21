require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const routerProducts = require("./routing/product");
const routerAuth = require("./routing/auth");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/", routerProducts);
app.use("/auth/", routerAuth);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Successfully connection");
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });

app.listen(port, () => {
  console.log(`Server running on localho:${port}`);
});
