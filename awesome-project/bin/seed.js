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

    // -------------------------HOMME--------------- BRACELET
      {
        productName: "Yosemite",
        pictures: [
          "../images/product-images/homme/bracelet/1/IMG_4056.JPG",
          "../images/product-images/homme/bracelet/1/IMG_4062.JPG",
          "../images/product-images/homme/bracelet/1/IMG_4063.JPG",
        ],
        typeOfProduct: "bracelet",
        price: "45 €",
        // collection: "apache",
        stones: [
          { name: ["Onyx", "Pierre de Lave"] },
          {
            img: ["../images/stones-pictures/onyx.png", "../images/stones-pictures/pierre-de-lave.png"]
          }
        ],
        gender: "male",
        color: ["noir",]
      },
       {
        productName: "Death Valley",
        pictures: [
          "../images/product-images/homme/bracelet/2/IMG_4041.JPG",
          "../images/product-images/homme/bracelet/2/IMG_4042.JPG",
          "../images/product-images/homme/bracelet/2/IMG_4043.JPG",
        ],
        typeOfProduct: "bracelet",
        price: "65 €",
        // collection: "apache",
        stones: [
          { name: ["Onyx", "Jaspe"] },
          {
            img: ["../images/stones-pictures/onyx.png", "../images/stones-pictures/jaspe.png"]
          }
        ],
        gender: "male",
        color: ["noir","beige"]
      },
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
            img: ["../images/stones-pictures/onyx.png", "../images/stones-pictures/malachite.png"]
          }
        ],
        gender: "male",
        color: ["noir","vert"]
      },
    
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
            img: ["../images/stones-pictures/jaspe.png", "../images/stones-pictures/onyx.png","../images/stones-pictures/pierre-de-lave.png"]
          }
        ],
        gender: "male",
        color: ["noir","vert"]
      },
    
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
          { name: [ "Jaspe"],},
          {
            img: [ "../images/stones-pictures/jaspe.png"]
          }
        ],
        gender: "male",
        color: ["beige"]
      },
    
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
          { name: [ "Onyx","Malachite"]},
          {
            img: ["../images/stones-pictures/onyx.png", "../images/stones-pictures/malachite.png"]
          }
        ],
        gender: "male",
        color: ["noir","vert"]
      },
    // -------------------------HOMME--------------- SAUTOIR
    
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
          { name: [ "Turquoise","Onyx"]},
          {
            img: ["../images/stones-pictures/turquoise.png", "../images/stones-pictures/onyx.png"]
          }
        ],
        gender: "male",
        color: ["noir","vert"]
      },
    
      {
        productName: "Apache",
       pictures: [
         "../images/product-images/homme/sautoire/2/IMG_4030.JPG",
         "../images/product-images/homme/sautoire/2/IMG_4032.JPG",
         "../images/product-images/homme/sautoire/2/IMG_4033.JPG"
       ],
       typeOfProduct: "sautoir",
       price: "125 €",
       // collection: "apache",
       stones: [
         { name: [ "Turquoise","Onyx", "Cornaline"]},
         {
           img: ["../images/stones-pictures/cornaline.png", "../images/stones-pictures/onyx.png","../images/stones-pictures/turquoise.png", ]
         }
       ],
       gender: "male",
       color: ["noir","bleu","rouge"]
     },
     
     {
      productName: "Stonehenge",
     pictures: [
       "../images/product-images/homme/sautoire/3/IMG_4034.JPG",
       "../images/product-images/homme/sautoire/3/IMG_4035.JPG",
       "../images/product-images/homme/sautoire/3/IMG_4036.JPG"
     ],
     typeOfProduct: "sautoir",
     price: "100 €",
     // collection: "apache",
     stones: [
       { name: [ "Jaspe","Onyx"]},
       {
         img: ["../images/stones-pictures/jaspe.png", "../images/stones-pictures/onyx.png", ]
       }
     ],
     gender: "male",
     color: ["noir","vert"]
    },
    
     // -------------------------FEMME--------------- BRACELET
     {
      productName: "Etna",
     pictures: [
       "../images/product-images/homme/bracelet/1/IMG_4091.JPG",
       "../images/product-images/homme/bracelet/1/IMG_4092.JPG",
       "../images/product-images/homme/bracelet/1/IMG_4093.JPG"
     ],
     typeOfProduct: "bracelet",
     price: "40 €",
    
     stones: [
       { name: ["Onyx", "Pierre de Lave"] },
       {
         img: ["../images/stones-pictures/onyx.png","../images/stones-pictures/pierre-de-lave.png"]
       }
     ],
     gender: "female",
     color: ["noir",]
    },
    
    
    {
      productName: "Springfield",
     pictures: [
       "../images/product-images/homme/bracelet/2/IMG_4091.JPG",
       "../images/product-images/homme/bracelet/2/IMG_4092.JPG",
       "../images/product-images/homme/bracelet/2/IMG_4093.JPG"
     ],
     typeOfProduct: "bracelet",
     price: "40 €",
    
     stones: [
       { name: ["Jaspe", "Turquoise"] },
       {
         img: ["../images/stones-pictures/jaspe.png", "../images/stones-pictures/turquoise.png"]
       }
     ],
     gender: "female",
     color: ["beige","bleu"]
    },
    
    {
      productName: "Indian Summer",
     pictures: [
       "../images/product-images/homme/bracelet/3/IMG_4097.JPG",
       "../images/product-images/homme/bracelet/3/IMG_4098.JPG",
       "../images/product-images/homme/bracelet/3/IMG_4100.JPG"
     ],
     typeOfProduct: "bracelet",
     price: "50 €",
    
     stones: [
       { name: ["Cornaline", "Aigue Marine"] },
       {
         img: ["../images/stones-pictures/cornaline.png", "../images/stones-pictures/aigue-marine.png"]
       }
     ],
     gender: "female",
     color: ["rouge","bleu"]
    },
    
    
    {
      productName: "Venice Beach",
     pictures: [
       "../images/product-images/homme/bracelet/4/IMG_4101.JPG",
       "../images/product-images/homme/bracelet/4/IMG_4103.JPG",
       "../images/product-images/homme/bracelet/4/IMG_4104.JPG"
     ],
     typeOfProduct: "bracelet",
     price: "40 €",
    
     stones: [
       { name: ["Corail", "Turquoise"] },
       {
         img: ["../images/stones-pictures/corail.png", "../images/stones-pictures/turquoise.png"]
       }
     ],
     gender: "female",
     color: ["rouge","bleu"]
    },
    
    
    {
      productName: "Venice Beach",
     pictures: [
       "../images/product-images/homme/bracelet/6/IMG_4105.JPG",
       "../images/product-images/homme/bracelet/6/IMG_4106.JPG",
       "../images/product-images/homme/bracelet/6/IMG_4107.JPG"
     ],
     typeOfProduct: "bracelet",
     price: "40 €",
    
     stones: [
       { name: ["Jaspe", "Lapis Lazuli"] },
       {
         img: ["../images/stones-pictures/jaspe.png", "../images/stones-pictures/lapis_lazuli.png"]
       }
     ],
     gender: "female",
     color: ["beige","bleu"]
    },
    ];
    

Product.create(productData)
  .then(response => {
    console.log("It works");
  })
  .catch(err => next(err));
