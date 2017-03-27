// import * as React from 'react';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { Login } from ('../app/components/login/Login');

// const router = (
//   <Router>
//     <Route path='/login' component={ Login } />      
//     </Route>
//   </Router>
// );




var passport = require('passport');
var Account = require('../models/account');
var router = require('express').Router();

// router.get('/', function(req, res) {
//   res.render('index', {user: req.user});
// });

// router.get('/register', function(req, res) {
//   res.render('register', {});
// });

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

// router.get('/login', function(req, res) {
//   res.render('login', {
//   	username: req.username
//   });
// });

// new route to authenticate user 
// router.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     console.log('/users/' + req.user.username);
//     res.redirect('/users/' + req.user.username);
//   });

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
      return res.send({ success : true, message : 'authentication succeeded' });
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

// router.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });

module.exports = router;