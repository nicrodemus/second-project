const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: String,
    pictures: Array,
    typeOfProduct: String,
    price: String,
    // collection: String,
    stones: Array,
    gender: String,
    color: Array
  },
  {
    timestamps: true
  }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
