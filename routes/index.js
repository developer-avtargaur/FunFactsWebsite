var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://localhost:3050/v1/fact/random', function(error, response, body) {
    console.log("Retrieved fun fact: " + body);
    var fact = JSON.parse(body);
    res.render('index', { title: 'Fun Facts', fact: fact });
  });
});

router.get('/:factId', function(req, res, next) {
  var url = 'http://localhost:3050/v1/fact/' + req.params.factId;
  request(url, function(error, response, body) {
    console.log("Retrieved fun fact: " + body);
    var fact = JSON.parse(body);
    res.render('fact', { title: 'Fun Facts', fact: fact });
  });
});

module.exports = router;
