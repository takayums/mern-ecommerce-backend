const Products = require("../models/product");

// Get All Data Products
const getAllProducts = async (req, res) => {
  try {
    const data = await Products.find({});
    res.json({ status: "success", data });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// Get Single Data Products
const getSingleProducts = async (req, res) => {
  console.log(req.params.id);
  try {
    const data = await Products.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "Data Not Found" });
    res.json({ status: "success", data });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

// Create Data Products
const createProducts = async (req, res) => {
  try {
    const product = req.body;
    await Products.create(product);
    res.json({ status: "success", message: "Successfully create product" });
  } catch (error) {
    res.status(500).json({ status: "failde", message: error.message });
  }
  res.send("create data");
};

// Update Data Products
const updateProducts = async (req, res) => {
  res.send("update data data");
};

// Delete Data Products
const deteleProducts = async (req, res) => {
  res.send("delete data");
};

module.exports = {
  getAllProducts,
  getSingleProducts,
  createProducts,
  updateProducts,
  deteleProducts,
};
