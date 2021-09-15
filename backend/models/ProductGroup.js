const { findAllByTestId } = require("@testing-library/dom");
const mongoose = require("mongoose");

const ProductGroup = new mongoose.Schema({
  
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ProductGroup", ProductGroup);
