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

module.exports = router;