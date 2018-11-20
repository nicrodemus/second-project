const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    preNom: String,
    nom: String,
    adresse: String,
    codePostal: String,

    pays: String,
    eMail: String,
    encryptedPassword: { type: String },
    favourites: Array
  },
  {
    timestamps: true
  }
);
const User = mongoose.model("User", userSchema);
// c;

module.exports = User;
