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
        img: [
          "../images/stones-pictures/onyx.png",
          "../images/stones-pictures/pierre-de-lave.png"
        ]
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
        img: [
          "../images/stones-pictures/onyx.png",
          "../images/stones-pictures/jaspe.png"
        ]
      }
    ],
    gender: "male",
    color: ["noir", "beige"]
  },
  ////--------------- product 3 ///////////////////
  {
    productName: "Nevada",
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
        img: [
          "../images/stones-pictures/onyx.png",
          "../images/stones-pictures/malachite.png"
        ]
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
        img: [
          "../images/stones-pictures/onyx.png",
          "../images/stones-pictures/jaspe.png",
          "../images/stones-pictures/pierre-de-lave.png"
        ]
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
        img: ["../images/stones-pictures/jaspe.png"]
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
        img: [
          "../images/stones-pictures/onyx.png",
          "../images/stones-pictures/malachite.png"
        ]
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
        img: [
          "../images/stones-pictures/turquoise.png",
          "../images/stones-pictures/onyx.png"
        ]
      }
    ],
    gender: "male",
    color: ["noir", "vert"]
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
      { name: ["Turquoise", "Onyx", "Cornaline"] },
      {
        img: [
          "../images/stones-pictures/turquoise.png",
          "../images/stones-pictures/onyx.png",
          "../images/stones-pictures/cornaline.png"
        ]
      }
    ],
    gender: "male",
    color: ["noir", "bleu", "rouge"]
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
      { name: ["Jaspe", "Onyx"] },
      {
        img: [
          "../images/stones-pictures/jaspe.png",
          "../images/stones-pictures/onyx.png"
        ]
      }
    ],
    gender: "male",
    color: ["noir", "vert"]
  },

  // -------------------------FEMME--------------- BRACELET
  {
    productName: "Etna",
    pictures: [
      "../images/product-images/femme/bracelet/1/IMG_4091.JPG",
      "../images/product-images/femme/bracelet/1/IMG_4092.JPG",
      "../images/product-images/femme/bracelet/1/IMG_4093.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "40 €",

    stones: [
      { name: ["Onyx", "Pierre de Lave"] },
      {
        img: [
          "../images/stones-pictures/onyx.png",
          "../images/stones-pictures/pierre-de-lave.png"
        ]
      }
    ],
    gender: "female",
    color: ["noir"]
  },

  {
    productName: "Springfield",
    pictures: [
      "../images/product-images/femme/bracelet/2/IMG_4094.JPG",
      "../images/product-images/femme/bracelet/2/IMG_4095.JPG",
      "../images/product-images/femme/bracelet/2/IMG_4096.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "40 €",

    stones: [
      { name: ["Jaspe", "Turquoise"] },
      {
        img: [
          "../images/stones-pictures/jaspe.png",
          "../images/stones-pictures/turquoise.png"
        ]
      }
    ],
    gender: "female",
    color: ["beige", "bleu"]
  },

  {
    productName: "Indian Summer",
    pictures: [
      "../images/product-images/femme/bracelet/3/IMG_4097.JPG",
      "../images/product-images/femme/bracelet/3/IMG_4098.JPG",
      "../images/product-images/femme/bracelet/3/IMG_4100.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "50 €",

    stones: [
      { name: ["Cornaline", "Aigue Marine"] },
      {
        img: [
          "../images/stones-pictures/cornaline.png",
          "../images/stones-pictures/aigue-marine.png"
        ]
      }
    ],
    gender: "female",
    color: ["rouge", "bleu"]
  },

  {
    productName: "Venice Beach",
    pictures: [
      "../images/product-images/femme/bracelet/4/IMG_4101.JPG",
      "../images/product-images/femme/bracelet/4/IMG_4103.JPG",
      "../images/product-images/femme/bracelet/4/IMG_4104.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "40 €",

    stones: [
      { name: ["Corail", "Turquoise"] },
      {
        img: [
          "../images/stones-pictures/corail.png",
          "../images/stones-pictures/turquoise.png"
        ]
      }
    ],
    gender: "female",
    color: ["rouge", "bleu"]
  },

  {
    productName: "Mallorca",
    pictures: [
      "../images/product-images/femme/bracelet/6/IMG_4105.JPG",
      "../images/product-images/femme/bracelet/6/IMG_4106.JPG",
      "../images/product-images/femme/bracelet/6/IMG_4107.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "40 €",

    stones: [
      { name: ["Jaspe", "Lapis Lazuli"] },
      {
        img: [
          "../images/stones-pictures/jaspe.png",
          "../images/stones-pictures/lapis_lazuli.png"
        ]
      }
    ],
    gender: "female",
    color: ["beige", "bleu"]
  },
  {
    productName: "Inferno Rosso",
    pictures: [
      "../images/product-images/femme/bracelet/7/IMG_4111.JPG",
      "../images/product-images/femme/bracelet/7/IMG_4112.JPG",
      "../images/product-images/femme/bracelet/7/IMG_4113.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "45€",

    stones: [
      { name: ["Jaspe"] },
      {
        img: ["../images/stones-pictures/jaspe.png"]
      }
    ],
    gender: "female",
    color: ["beige"]
  },

  {
    productName: "Dark Buddha",
    pictures: [
      "../images/product-images/femme/bracelet/8/IMG_4117.JPG",
      "../images/product-images/femme/bracelet/8/IMG_4118.JPG",
      "../images/product-images/femme/bracelet/8/IMG_4119.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "35€",

    stones: [
      { name: ["Lapis Lazuli"] },
      {
        img: ["../images/stones-pictures/lapis_lazuli.png"]
      }
    ],
    gender: "female",
    color: ["bleu"]
  },

  {
    productName: "Maria Bianca",
    pictures: [
      "../images/product-images/femme/bracelet/9/IMG_4120.JPG",
      "../images/product-images/femme/bracelet/9/IMG_4121.JPG",
      "../images/product-images/femme/bracelet/9/IMG_4122.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "30€",

    stones: [
      { name: ["Quartz"] },
      {
        img: ["../images/stones-pictures/quartz.png"]
      }
    ],
    gender: "female",
    color: ["bleu"]
  },

  {
    productName: "Beverly Hills",
    pictures: [
      "../images/product-images/femme/bracelet/10/IMG_4123.JPG",
      "../images/product-images/femme/bracelet/10/IMG_4124.JPG",
      "../images/product-images/femme/bracelet/10/IMG_4125.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "30€",

    stones: [
      { name: ["Onyx", "Jaspe"] },
      {
        img: [
          "../images/stones-pictures/onyx.png",
          "../images/stones-pictures/jaspe.png"
        ]
      }
    ],
    gender: "female",
    color: ["noir", "beige"]
  },

  {
    productName: "Atacama",
    pictures: [
      "../images/product-images/femme/bracelet/11/IMG_4126.JPG",
      "../images/product-images/femme/bracelet/11/IMG_4127.JPG",
      "../images/product-images/femme/bracelet/11/IMG_4128.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "40€",

    stones: [
      { name: ["Hematite"] },
      {
        img: ["../images/stones-pictures/hematite.png"]
      }
    ],
    gender: "female",
    color: ["gris"]
  },

  {
    productName: "Sea Buddha",
    pictures: [
      "../images/product-images/femme/bracelet/12/IMG_4129.JPG",
      "../images/product-images/femme/bracelet/12/IMG_4130.JPG",
      "../images/product-images/femme/bracelet/12/IMG_4131.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "45€",

    stones: [
      { name: ["Turquoise"] },
      {
        img: ["../images/stones-pictures/turquoise.png"]
      }
    ],
    gender: "female",
    color: ["bleu"]
  },

  {
    productName: "Amazonia",
    pictures: [
      "../images/product-images/femme/bracelet/13/IMG_4133.JPG",
      "../images/product-images/femme/bracelet/13/IMG_4136.JPG",
      "../images/product-images/femme/bracelet/13/IMG_4139.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "55€",

    stones: [
      { name: ["Azurite"] },
      {
        img: ["../images/stones-pictures/azurite.png"]
      }
    ],
    gender: "female",
    color: ["vert"]
  },

  {
    productName: "Bahiamarela",
    pictures: [
      "../images/product-images/femme/bracelet/14/IMG_4140.JPG",
      "../images/product-images/femme/bracelet/14/IMG_4141.JPG",
      "../images/product-images/femme/bracelet/14/IMG_4142.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "50€",

    stones: [
      { name: ["Grenat", "Turquoise"] },
      {
        img: [
          "../images/stones-pictures/grenat.png",
          "../images/stones-pictures/turquoise.png"
        ]
      }
    ],
    gender: "female",
    color: ["rouge", "bleu"]
  },

  {
    productName: "Sinharaja",
    pictures: [
      "../images/product-images/femme/bracelet/15/IMG_4143.JPG",
      "../images/product-images/femme/bracelet/15/IMG_4144.JPG",
      "../images/product-images/femme/bracelet/15/IMG_4145.JPG"
    ],
    typeOfProduct: "bracelet",
    price: "55€",

    stones: [
      { name: ["Jaspe"] },
      {
        img: ["../images/stones-pictures/jaspe.png"]
      }
    ],
    gender: "female",
    color: ["beige"]
  },
  //------------------- FEMME--------------------- COLLIER (RAS DU COU)------------------

  {
    productName: "Gran Paradiso",
    pictures: [
      "../images/product-images/femme/collier/1/IMG_4071.JPG",
      "../images/product-images/femme/collier/1/IMG_4073.JPG",
      "../images/product-images/femme/collier/1/IMG_4074.JPG"
    ],
    typeOfProduct: "collier",
    price: "95€",

    stones: [
      { name: ["Agate"] },
      {
        img: ["../images/stones-pictures/agate.png"]
      }
    ],
    gender: "female",
    color: ["rouge", "bleu"]
  },

  {
    productName: "Gorgona",
    pictures: [
      "../images/product-images/femme/collier/2/IMG_4075.JPG",
      "../images/product-images/femme/collier/2/IMG_4076.JPG",
      "../images/product-images/femme/collier/2/IMG_4077.JPG"
    ],
    typeOfProduct: "collier",
    price: "130€",

    stones: [
      { name: ["Turquoise", "Grenat"] },
      {
        img: [
          "../images/stones-pictures/turquoise.png",
          "../images/stones-pictures/grenat.png"
        ]
      }
    ],
    gender: "female",
    color: ["rouge", "bleu"]
  },
  //// TODO
  {
    productName: "Copacabana",
    pictures: [
      "../images/product-images/femme/collier/3/IMG_4082.JPG",
      "../images/product-images/femme/collier/3/IMG_4083.JPG",
      "../images/product-images/femme/collier/3/IMG_4084.JPG"
    ],
    typeOfProduct: "collier",
    price: "155€",

    stones: [
      { name: ["Turquoise"] },
      {
        img: ["../images/stones-pictures/turquoise.png"]
      }
    ],
    gender: "female",
    color: ["bleu"]
  },

  {
    productName: "Ipanema",
    pictures: [
      "../images/product-images/femme/collier/4/IMG_4085.JPG",
      "../images/product-images/femme/collier/4/IMG_4086.JPG",
      "../images/product-images/femme/collier/4/IMG_4087.JPG"
    ],
    typeOfProduct: "collier",
    price: "140€",

    stones: [
      { name: ["Turquoise", "Grenat", "Jaspe"] },
      {
        img: [
          "../images/stones-pictures/turquoise.png",
          "../images/stones-pictures/grenat.png",
          "../images/stones-pictures/jaspe.png"
        ]
      }
    ],
    gender: "female",
    color: ["bleu", "beige", "rouge"]
  },

  //------------------- FEMME--------------------- SAUTOIR------------------

  {
    productName: "Fint Oasis",
    pictures: [
      "../images/product-images/femme/sautoire/1/IMG_4158.JPG",
      "../images/product-images/femme/sautoire/1/IMG_4159.JPG",
      "../images/product-images/femme/sautoire/1/IMG_4160.JPG"
    ],
    typeOfProduct: "sautoir",
    price: "480€",

    stones: [
      { name: ["Turquoise", "Grenat", "Jaspe"] },
      {
        img: [
          "../images/stones-pictures/turquoise.png",
          "../images/stones-pictures/grenat.png",
          "../images/stones-pictures/jaspe.png"
        ]
      }
    ],
    gender: "female",
    color: ["bleu", "beige", "rouge"]
  },

  {
    productName: "Manasarovar",
    pictures: [
      "../images/product-images/femme/sautoire/2/IMG_4161.JPG",
      "../images/product-images/femme/sautoire/2/IMG_4162.JPG",
      "../images/product-images/femme/sautoire/2/IMG_4163.JPG"
    ],
    typeOfProduct: "sautoir",
    price: "240€",

    stones: [
      { name: ["Hematite", "Onyx", "Jade"] },
      {
        img: [
          "../images/stones-pictures/hematite.png",
          "../images/stones-pictures/onyx.png",
          "../images/stones-pictures/jade.png"
        ]
      }
    ],
    gender: "female",
    color: ["gris", "noir", "vert"]
  },

  {
    productName: "Norbulingka",
    pictures: [
      "../images/product-images/femme/sautoire/3/IMG_4172.JPG",
      "../images/product-images/femme/sautoire/3/IMG_4174.JPG",
      "../images/product-images/femme/sautoire/3/IMG_4175.JPG"
    ],
    typeOfProduct: "sautoir",
    price: "190€",

    stones: [
      { name: ["Pierre de Lave", "Onyx", "Lapis Lazuli"] },
      {
        img: [
          "../images/stones-pictures/pierre-de-lave.png",
          "../images/stones-pictures/onyx.png",
          "../images/stones-pictures/lapis_lazuli.png"
        ]
      }
    ],
    gender: "female",
    color: ["bleu", "noir"]
  },

  {
    productName: "Santa Barbara",
    pictures: [
      "../images/product-images/femme/sautoire/4/IMG_4176.JPG",
      "../images/product-images/femme/sautoire/4/IMG_4177.JPG",
      "../images/product-images/femme/sautoire/4/IMG_4179.JPG"
    ],
    typeOfProduct: "sautoir",
    price: "220€",

    stones: [
      { name: ["Agate", "Jaspe", "Labradorite"] },
      {
        img: [
          "../images/stones-pictures/agate.png",
          "../images/stones-pictures/jaspe.png",
          "../images/stones-pictures/labradorite.png"
        ]
      }
    ],
    gender: "female",
    color: ["bleu", "rouge"]
  },

  {
    productName: "Luosto",
    pictures: [
      "../images/product-images/femme/sautoire/5/IMG_4182.jpeg",
      "../images/product-images/femme/sautoire/5/IMG_4183.JPG",
      "../images/product-images/femme/sautoire/5/IMG_4184.JPG"
    ],
    typeOfProduct: "sautoir",
    price: "240€",

    stones: [
      { name: ["Agate", "Quartz"] },
      {
        img: [
          "../images/stones-pictures/agate.png",
          "../images/stones-pictures/quartz.png"
        ]
      }
    ],
    gender: "female",
    color: ["blanc", "gris"]
  },

  {
    productName: "Shishapangma",
    pictures: [
      "../images/product-images/femme/sautoire/6/IMG_4186.JPG",
      "../images/product-images/femme/sautoire/6/IMG_4187.JPG",
      "../images/product-images/femme/sautoire/6/IMG_4188.JPG"
    ],
    typeOfProduct: "sautoir",
    price: "250€",

    stones: [
      { name: ["Amethyste", "Agate", "Jade", "Amazonite"] },
      {
        img: [
          "../images/stones-pictures/amethyste.png",
          "../images/stones-pictures/agate.png",
          "../images/stones-pictures/jade.png",
          "../images/stones-pictures/amazonite.png"
        ]
      }
    ],
    gender: "female",
    color: ["blanc", "gris"]
  }
];

Product.create(productData)
  .then(response => {
    console.log("It works");
  })
  .catch(err => next(err));
