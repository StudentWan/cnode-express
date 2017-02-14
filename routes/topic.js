var express = require('express');
var superagent = require('superagent');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('topic');
});

module.exports = router;