const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getSingleProducts,
  createProducts,
  updateProducts,
  deteleProducts,
} = require("../controller/products");

// Get All Data
router.get("/products", getAllProducts);

// Get Single Data
router.get("/products/:id", getSingleProducts);

// Create Data
router.post("/products", createProducts);

// Update Data
router.put("/products/:id", updateProducts);

// Delete Data
router.delete("/products/:id", deteleProducts);

module.exports = router;
