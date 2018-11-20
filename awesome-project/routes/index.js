const express = require("express");
const router = express.Router();
const User = require("../models/user-model.js");
const Product = require("../models/product-model.js");
const bcrypt = require("bcrypt");
const passport = require("passport");
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
  Product.find({ gender: { $eq: "male" } })
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
  Product.find({ typeOfProduct: { $eq: "bracelet" }, gender: { $eq: "male" } })
    .then(productResults => {
      res.locals.productArray = productResults;
      res.render("template.hbs");
    })
    .catch(err => next(err));
});
router.get("/homme/sautoir", (req, res, next) => {
  Product.find({ typeOfProduct: { $eq: "sautoir" }, gender: { $eq: "male" } })
    .then(productResults => {
      res.locals.productArray = productResults;
      res.render("template.hbs");
    })
    .catch(err => next(err));
});

router.get("/homme/costum", (req, res, next) => {
  res.render("template.hbs");
});
//////////---------------------------------------- FEMME ROUTER-----------------------------//////////////////////////
router.get("/femme/collection", (req, res, next) => {
  Product.find({ gender: { $eq: "female" } })
    .then(productResults => {
      res.locals.productArray = productResults;
      res.render("template.hbs");
    })
    .catch(err => next(err));
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

//----------------------  product Routes------------------------------------//
router.get("/product/:productId", (req, res, next) => {
  const { productId } = req.params;
  Product.findById(productId)
    .then(productDoc => {
      res.locals.productItem = productDoc;
      res.render("product.hbs");
    })
    .catch(err => next(err));
});

///////////////////////// user ROUTER------------------------------------------------///////////////////////////////////
router.get("/signup", (req, res, next) => {
  res.render("sign-up.hbs");
});

router.post("/process-signup", (req, res, next) => {
  const {
    preNom,
    nom,
    adresse,
    codePostal,
    pays,
    eMail,
    originalPassword
  } = req.body;
  if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
    res.redirect("/signup");
    return;
  }
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);
  User.create({
    preNom,
    nom,
    adresse,
    codePostal,
    pays,
    eMail,
    encryptedPassword
  })
    .then(userDoc => {
      res.redirect("/");
    })
    .catch(err => next(err));
});

router.post("/process-login", (req, res, next) => {
  const { eMail, originalPassword } = req.body;
  console.log(eMail, originalPassword);
  User.findOne({ eMail: { $eq: eMail } })
    .then(userDoc => {
      console.log(userDoc);
      if (!userDoc) {
        res.redirect("/femme/collection");
        return;
      } else {
        req.logIn(userDoc, () => {
          res.redirect("/");
        });
      }
      const { encryptedPassword } = userDoc;
      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
        res.redirect("/signup");
      } else {
        req.logIn(userDoc, () => {
          res.redirect("/");
        });
      }
    })
    .catch(err => next(err));
});
router.get("/logout", (req, res, next) => {
  req.logout();

  res.redirect("/");
});

//-----------------------  wishLIst routes-------------------------------////////////////
router.get("/wishlist-add/:productId", (req, res, next) => {
  const user = req.user._id;
  const { productId } = req.params;
  User.findByIdAndUpdate(
    user,
    { $push: { favourites: productId } },
    { runValidators: true }
  )
    .then(userDoc => {
      let favourites = userDoc.favourites;

      Promise.all(favourites.map(id => Product.findById(id)))
        .then(products => {
          // res.send(products);
          res.locals.products = products;
          res.render("wish-list.hbs");
        })
        .catch(err => {
          throw err;
        });
    })
    .catch(err => next(err));
});

module.exports = router;
