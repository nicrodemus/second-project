const express = require("express");
const router = express.Router();
const User = require("../models/user-model.js");
const Product = require("../models/product-model.js");
const bcrypt = require("bcrypt");
const passport = require("passport");
//------------------------------------- HEADER ROUTER -------------------------------------------///////////////////////
/* GET home page */
router.get("/", (req, res, next) => {
  Product.find()
    .sort({ createdAt: -1 })
    .limit(4)
    .then(productResults => {
      res.locals.productArray = productResults;
      res.render("index");
    })
    .catch(err => next(err));
});

router.get("/connexion", (req, res, next) => {
  res.render("connexion.hbs");
});

router.get("/wishList/:userId", (req, res, next) => {
  const { userId } = req.params;
  // const userId = req.params.userId
  User.findById(userId)
    .populate("favourites")
    .then(userDoc => {
      res.locals.favourites = userDoc.favourites;
      res.render("wish-list.hbs");
    })
    .catch(err => next(err));
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

router.get("/conditions-generales", (req, res, next) => {
  res.render("general-conditions.hbs");
});
router.get("/legals", (req, res, next) => {
  res.render("legals.hbs");
});
router.get("/contacts", (req, res, next) => {
  res.render("contact.hbs");
});
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
  Product.find({
    typeOfProduct: { $eq: "bracelet" },
    gender: { $eq: "female" }
  })
    .then(productResults => {
      res.locals.productArray = productResults;
      res.render("template.hbs");
    })
    .catch(err => next(err));
});
router.get("/femme/sautoir", (req, res, next) => {
  Product.find({ typeOfProduct: { $eq: "sautoir" }, gender: { $eq: "female" } })
    .then(productResults => {
      res.locals.productArray = productResults;
      res.render("template.hbs");
    })
    .catch(err => next(err));
});
router.get("/femme/costum", (req, res, next) => {
  res.render("template.hbs");
});

router.get("/femme/rasDuCol", (req, res, next) => {
  Product.find({ typeOfProduct: { $eq: "collier" }, gender: { $eq: "female" } })
    .then(productResults => {
      res.locals.productArray = productResults;
      res.render("template.hbs");
    })
    .catch(err => next(err));
});

//----------------------  product Routes------------------------------------//
router.get("/product/:productId", (req, res, next) => {
  const { productId } = req.params;
  Product.findById(productId)
    .then(productDoc => {
      if (req.user) {
        res.locals.isNotInWishlist = !req.user.favourites.some(oneId => {
          return oneId.toString() === productId;
        });
      }

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
router.post("/wishlist-add/:productId", (req, res, next) => {
  const user = req.user._id;
  const { productId } = req.params;
  User.findByIdAndUpdate(
    user,
    { $push: { favourites: productId } },
    { runValidators: true }
  )
    .then(userDoc => {
      res.redirect("back");
    })
    .catch(err => next(err));
});

router.post("/whishlist-remove/:productId", (req, res, next) => {
  const user = req.user._id;
  const { productId } = req.params;
  User.findByIdAndUpdate(
    user,
    { $pull: { favourites: productId } },
    { runValidators: true }
  )
    .then(userDoc => {
      // res.redirect(`/wishlist/${req.user._id}`);
      res.redirect("back");
    })
    .catch(err => next(err));
});

module.exports = router;
