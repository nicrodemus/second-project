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
  ///////////////----- product 1  /////////////////
  {
    productName: "Yosemite",
    pictures: [
      "../images/product-images/homme/bracelet/1/IMG_4056.JPG",
      "../images/product-images/homme/bracelet/1/IMG_4062.JPG",
      "../images/product-images/homme/bracelet/1/IMG_4063.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "45 €",
    // collection: "apache",
    stones: [
      { name: ["Onyx", "Pierre de Lave"] },
      {
        img: ["../images/amethyste.png", "../images/jade.png"]
      }
    ],
    gender: "male",
    color: ["noir"]
  },
  ////--------------- product 2 ///////////////////
  {
    productName: "Death Valley",
    pictures: [
      "../images/product-images/homme/bracelet/2/IMG_4041.JPG",
      "../images/product-images/homme/bracelet/2/IMG_4042.JPG",
      "../images/product-images/homme/bracelet/2/IMG_4043.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "65 €",
    // collection: "apache",
    stones: [
      { name: ["Onyx", "Jaspe"] },
      {
        img: ["../images/amethyste.png", "../images/jade.png"]
      }
    ],
    gender: "male",
    color: ["noir", "beige"]
  },
  ////--------------- product 3 ///////////////////
  {
    productName: "Long way to hell",
    pictures: [
      "../images/product-images/homme/bracelet/3/IMG_4045.JPG",
      "../images/product-images/homme/bracelet/3/IMG_4046.JPG",
      "../images/product-images/homme/bracelet/3/IMG_4048.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "75 €",
    // collection: "apache",
    stones: [
      { name: ["Onyx", "Malachite"] },
      {
        img: ["../images/amethyste.png", "../images/jade.png"]
      }
    ],
    gender: "male",
    color: ["noir", "vert"]
  },
  ////--------------- product 4 ///////////////////
  {
    productName: "Sequoia",
    pictures: [
      "../images/product-images/homme/bracelet/4/IMG_4037.JPG",
      "../images/product-images/homme/bracelet/4/IMG_4038.JPG",
      "../images/product-images/homme/bracelet/4/IMG_4039.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "50 €",
    // collection: "apache",
    stones: [
      { name: ["Onyx", "Jaspe", "Pierre de Lave"] },
      {
        img: ["../images/amethyste.png", "../images/jade.png"]
      }
    ],
    gender: "male",
    color: ["noir", "vert"]
  },
  ////--------------- product 5 ///////////////////
  {
    productName: "Sahara",
    pictures: [
      "../images/product-images/homme/bracelet/5/IMG_4053.JPG",
      "../images/product-images/homme/bracelet/5/IMG_4054.JPG",
      "../images/product-images/homme/bracelet/5/IMG_4055.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "45 €",
    // collection: "apache",
    stones: [
      { name: ["Jaspe"] },
      {
        img: ["../images/amethyste.png", "../images/jade.png"]
      }
    ],
    gender: "male",
    color: ["beige"]
  },
  ////--------------- product 6 ///////////////////
  {
    productName: "Rodeo Drive",
    pictures: [
      "../images/product-images/homme/bracelet/6/IMG_4049.JPG",
      "../images/product-images/homme/bracelet/6/IMG_4050.JPG",
      "../images/product-images/homme/bracelet/6/IMG_4051.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "60 €",
    // collection: "apache",
    stones: [
      { name: ["Onyx", "Malachite"] },
      {
        img: ["../images/amethyste.png", "../images/jade.png"]
      }
    ],
    gender: "male",
    color: ["noir", "vert"]
  },
  ////--------------- product 7 ///////////////////
  {
    productName: "Wichita",
    pictures: [
      "../images/product-images/homme/sautoire/1/IMG_4027.JPG",
      "../images/product-images/homme/sautoire/1/IMG_4028.JPG",
      "../images/product-images/homme/sautoire/1/IMG_4029.JPG"
    ],
    typeOfProduct: "sautoir",
    price: "110 €",
    // collection: "apache",
    stones: [
      { name: ["Turquoise", "Onyx"] },
      {
        img: ["../images/amethyste.png", "../images/jade.png"]
      }
    ],
    gender: "male",
    color: ["noir", "vert"]
  },
  {
    productName: "Wichita",
    pictures: [
      "../images/product-images/homme/sautoire/1/IMG_4027.JPG",
      "../images/product-images/homme/sautoire/1/IMG_4028.JPG",
      "../images/product-images/homme/sautoire/1/IMG_4029.JPG"
    ],
    typeOfProduct: "sautoir",
    price: "110 €",
    // collection: "apache",
    stones: [
      { name: ["Turquoise", "Onyx"] },
      {
        img: ["../images/amethyste.png", "../images/jade.png"]
      }
    ],
    gender: "male",
    color: ["noir", "vert"]
  }
];

Product.create(productData)
  .then(response => {
    console.log("It works");
  })
  .catch(err => next(err));
