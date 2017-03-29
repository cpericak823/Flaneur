var passport = require('passport');
var Account = require('../models/account');
var router = require('express').Router();
// test code
LocalStrategy = require('passport-local').Strategy;

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

// uncomment below if test doesn't work

// router.post('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) {
//       return next(err); // will generate a 500 error
//     }
//     // Generate a JSON response reflecting authentication status
//     if (! user) {
//       return res.send({ success : false, message : 'authentication failed' });
//     }
//     // ***********************************************************************
//     // "Note that when using a custom callback, it becomes the application's
//     // responsibility to establish a session (by calling req.login()) and send
//     // a response."
//     // Source: http://passportjs.org/docs
//     // ***********************************************************************
//     req.login(user, loginErr => {
//       if (loginErr) {
//         return next(loginErr);
//       }
//       return res.send({ success : true, message : 'authentication succeeded' });
//     });      
//   })(req, res, next);
// });

// router.get('/api/users/me',
//   passport.authenticate('basic', { session: false }),
//   function(req, res) {
//     res.json({ 
//       id: req.user.id, 
//       username: req.user.username 
//       });
//   });


// test
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
// end test code



// router.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });

module.exports = router;