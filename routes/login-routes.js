
var passport = require('passport');
var Account = require('../models/account.js');
var router = require('express').Router();
LocalStrategy = require('passport-local').Strategy;

router.post('/register', function(req, res, next) {
  console.log(req.body);
  Account.register(new Account({
    username: req.body.username
    }), req.body.password, function(err) {
    if (err) {
    console.log('error registering user!');      
    }    
  });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.send({ success : false, message : 'authentication failed' });
    }
    // ***********************************************************************
    // "Note that when using a custom callback, it becomes the application's
    // responsibility to establish a session (by calling req.login()) and send
    // a response."
    // Source: http://passportjs.org/docs
    // ***********************************************************************
    req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.send({ user: user });
    });      
  })(req, res, next);
});

router.get('/api/users/me',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json({ 
      id: req.user.id, 
      username: req.user.username 
      });
  });

router.post('/logout', function(req, res) {
  req.logout();
  res.json({});
});

module.exports = router;