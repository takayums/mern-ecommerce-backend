const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    },
    thumbnail: {
      type: String,
      require: true,
    },
    images: [
      {
        type: String,
        require: true,
      },
    ],
  },
  { timestamp: true },
);

module.exports = mongoose.model("Product", product);
