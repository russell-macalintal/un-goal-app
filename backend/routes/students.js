
var express = require('express');
var router = express.Router();
var models = require('../models');
const authService = require("../services/auth");

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.student
    .findAll({})
    .then(studentsFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(studentsFound));
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

//get individual note info
router.get('/:id', function(req, res, next){
    let studentId = parseInt(req.params.id);
    models.student
    .findOne({
      where: {
        StudentId: studentId
      }
    })
    .then(studentsFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(stuudentsFound));
    })
})

/* Get students in certain area. */
router.get('/:location', function(req, res, next) {
    let studentLocation = req.params.location
    models.student
    .findAll({})
    .then(studentsFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(studentsFound));
    });
});

module.exports = router;