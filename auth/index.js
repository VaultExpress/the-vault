const express = require('express');
const router = express.Router();
const passport = require('passport')
const local = require('./local');
//const github = require('./github');
//const google = require('./google');

module.exports = function(db) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    let user = db.findById(id);
    if (user) {
      done(null, user);
      return null;
    }
  });

//  if (typeof process.env.GOOGLE_CONSUMER_KEY !== 'undefined'){
//    google(passport, "secrets.google");
//  }

  local(passport);

  router.get('/signup', (req, res) => {
    res.send('signup.....');
  });

  router.get('/signin', (req, res) => {
    res.send('signin.....');
  });

  return router;
};
