// Get All Data Products
const getAllProducts = async (req, res) => {
  res.send("get all data");
};

// Get Single Data Products
const getSingleProducts = async (req, res) => {
  res.send("get single data");
};

// Create Data Products
const createProducts = async (req, res) => {
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
