require("dotenv").config();
const express = require("express");

const routerProducts = require("./routing/products");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/", routerProducts);

app.listen(port, () => {
  console.log(`Server running on localho:3000`);
});
