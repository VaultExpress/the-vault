const LocalStrategy  = require('passport-local').Strategy;
const db = require('../db');
const util = require('../util');
const options = {
  usernameField: 'username',
  passwordField: 'password'
};

const authen = (username, password, done) => {
  try {
    let user = db.findByName(username);
    if (user) {
      let match = util.comparePassword(password, user.password);
      if (match) {
        done(null, user);
      } else {
        done('Invalid username/password', false);
      }
    } else {
      done('No username found', false);
    };
  } catch(err) {
    done('Found error', false);
  };
};

module.exports = (passport) => {
  passport.use(new LocalStrategy(options, authen));
};
