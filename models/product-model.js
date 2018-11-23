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
    gender: { type: String, enum: ["male", "female"] },
    color: Array
  },
  {
    timestamps: true
  }
);
productSchema.virtual("isMan").get(function() {
  return this.gender === "male";
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
