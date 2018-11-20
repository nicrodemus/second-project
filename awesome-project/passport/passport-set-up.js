const passport = require("passport");
const User = require("../models/user-model");

passport.serializeUser((userDoc, done) => {
  //CALL DONE() with null and the result if it's successful
  //(the result is the user's ID that we want to save in the session)

  done(null, userDoc._id);
});

//deserializeUser(): defines how to retrieve the user information from the DB
//(happens automatically on EVERY request AFTER you log in)
passport.deserializeUser((userId, done) => {
  User.findById(userId)

    .then(userDoc => {
      // call done() with null and result if it's successful
      //(the result is the user document from the database)
      done(null, userDoc);
    })
    //call done() with the error object if it fails
    .catch(err => done(err));
});

//module.exports = passportSetUp;
