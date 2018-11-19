const mongoose = require("mongoose");
const Product = require("../models/product-model.js");

mongoose
  .connect(
    "mongodb://localhost/awesome-project",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const productData = [
  {
    productName: "WHITE PAJÑÃ",
    pictures: [
      "../images/apala_bijoux_paris_bracelet_perles_agate_ponpon1.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "50 €",
    // collection: "apache",
    stones: [
      {
        name: ["agate", "silver", "diamant"]
      },
      {
        img: [
          "../images/amethyste.png",
          "../images/jade.png",
          "../images/jaspe.png",
          ""
        ]
      }
    ],

    gender: "male",
    color: ["blanc", "vert"]
  },
  {
    productName: "CHIMARIKO",
    pictures: [
      "../images/apala_bijoux_paris_bracelet_perles_agate_ponpon1.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "45 €",
    // collection: "apache",
    stones: [
      { name: ["ruby", "turquoise"] },
      {
        img: [
          "../images/amethyste.png",
          "../images/jade.png",
          "../images/jaspe.png"
        ]
      }
    ],
    gender: "male",
    color: ["rouge", "bleu"]
  }
];

Product.create(productData)
  .then(response => {
    console.log("It works");
  })
  .catch(err => next(err));
