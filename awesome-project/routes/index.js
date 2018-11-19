const express = require("express");
const router = express.Router();
const Product = require("../models/product-model.js");
//------------------------------------- HEADER ROUTER -------------------------------------------///////////////////////
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/connexion", (req, res, next) => {
  res.render("connexion.hbs");
});

router.get("/wishList", (req, res, next) => {
  res.render("wish-list.hbs");
});
//-----------------------------------maison apala----------------------------------------------/////////////

////////////////////////------------------------ HOMME ROUTER----------------------------/////////////////////////////
// router.get("/homme/collection", (req, res, next) => {
//   res.render("part-views-homme/collection");
//   // request to your database homme collection
//   // Get the response, store it into res.locals.collection
//   //render the collection.hbs
// });

// router.get("/homme/bracelets", (req, res, next) => {
//   res.render("part-views-homme/bracelets");
// });
// router.get("/homme/sautoir", (req, res, next) => {
//   res.render("part-views-homme/sautoir");
// });
// router.get("/homme/costum", (req, res, next) => {
//   res.render("part-views-homme/costum");
// });
// //////////---------------------------------------- FEMME ROUTER-----------------------------//////////////////////////
// router.get("/femme/collection", (req, res, next) => {
//   res.render("part-views-femme/collection");
//   // request to your database homme collection
//   // Get the response, store it into res.locals.collection
//   //render the collection.hbs
// });
// router.get("/femme/bracelets", (req, res, next) => {
//   res.render("part-views-femme/bracelets");
// });
// router.get("/femme/sautoir", (req, res, next) => {
//   res.render("part-views-femme/sautoir");
// });
// router.get("/femme/costum", (req, res, next) => {
//   res.render("part-views-femme/costum");
// });
// router.get("/femme/rasDuCol", (req, res, next) => {
//   res.render("part-views-femme/ras-du-col");
// });

/////------------------------- FOOTER ROUTER--------------------------------------------------------///////////--------
router.get("/question", (req, res, next) => {
  res.render("footer-views/question");
});
module.exports = router;

///////////////////////////////////////////////////     test------------------------------------------////////////////////

router.get("/homme/collection", (req, res, next) => {
  Product.find()
    .then(productResults => {
      res.locals.productArray = productResults;
      res.render("template.hbs");
    })
    .catch(err => next(err));

  // request to your database homme collection
  // Get the response, store it into res.locals.collection
  //render the collection.hbs
});

router.get("/homme/bracelets", (req, res, next) => {
  res.render("template.hbs");
});
router.get("/homme/sautoir", (req, res, next) => {
  res.render("template.hbs");
});
router.get("/homme/costum", (req, res, next) => {
  res.render("template.bhs");
});
//////////---------------------------------------- FEMME ROUTER-----------------------------//////////////////////////
router.get("/femme/collection", (req, res, next) => {
  res.render("template.hbs");
  // request to your database homme collection
  // Get the response, store it into res.locals.collection
  //render the collection.hbs
});
router.get("/femme/bracelets", (req, res, next) => {
  res.render("template.hbs");
});
router.get("/femme/sautoir", (req, res, next) => {
  res.render("template.hbs");
});
router.get("/femme/costum", (req, res, next) => {
  res.render("template.hbs");
});
router.get("/femme/rasDuCol", (req, res, next) => {
  res.render("template.hbs");
});
router.get("/product/:productId", (req, res, next) => {
  const { productId } = req.params;
  Product.findById(productId)
    .then(productDoc => {
      res.locals.productItem = productDoc;
      res.render("product.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
