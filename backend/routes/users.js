var express = require('express');
var router = express.Router();
var models = require('../models');
const authService = require("../services/auth");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//view user profile
router.get('/profile/:id', authService.verifyUser, function(req, res, next) {
  if (!req.isAuthenticated()) {
     return res.send('You are not authenticated');
  }
  if (req.params.id !== String(req.user.UserId)) {
    res.send('This is not your profile');
  } else {
    res.render('profile', {
      FirstName: req.user.FirstName,
      LastName: req.user.LastName,
      Email: req.user.Email,
      UserId: req.user.UserId,
      Username: req.user.Username,
    });
  }
});

router.get('/profile', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token)
      .then(user => {
        if (user) {
          res.send(JSON.stringify(user));
        } else {
          res.status(401);
          res.send('Invalid authentication token');
        }
      });
  } else {
    res.status(401);
    res.send('Must be logged in');
  }
});

// Create new user if one doesn't exist
router.post('/signup', function(req, res, next) {
  models.user
    .findOrCreate({
      where: {
        Username: req.body.username
      },
      defaults: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Password: authService.hashPassword(req.body.password),
        Skill: req.body.skill,
        Points: req.body.points,
        Location: req.body.location
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.send('User successfully created');
      } else {
        res.send('This user already exists');
      }
    });
});

// Create new student if one doesn't exist
router.post('/addStudent', function(req, res, next) {
  models.student
    .findOrCreate({
      where: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName
      },
      defaults: {
        Skill: req.body.skill,
        Location: req.body.location,
        Email: req.body.Email
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.send('Student successfully created');
      } else {
        res.send('This student already exists');
      }
    });
});


// Login user and return JWT as cookie
router.post('/login', function (req, res, next) {
  models.user.findOne({
    where: {
      Username: req.body.username
    }
  }).then(userInstance => {
    if (!userInstance) {
      console.log('User not found')
      return res.status(401).json({
        message: "Login Failed"
      });
    } else {
      let passwordMatch = authService.comparePasswords(req.body.password, userInstance.Password);
      if (passwordMatch) {
        let token = authService.signUser(userInstance);
        res.cookie('jwt', token);
        res.send('Login successful');
      } else {
        console.log('Wrong password');
        res.send('Wrong password');
      }
    }
  });
});

//get users profile
router.get('/profile', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    authService.verifyUser(token)
      .then(userInstance => {
        if (userInstance) {
          res.send(JSON.stringify(userInstance));
        } else {
          res.status(401);
          res.send('Invalid authentication token');
        }
      });
  } else {
    res.status(401);
    res.send('Must be logged in');
  }
});

//log out by setting cookie to null
router.get('/logout', function (req, res, next) {
  res.cookie('jwt', "", { expires: new Date(0) });
  res.send('Logged out');
});

module.exports = router;
