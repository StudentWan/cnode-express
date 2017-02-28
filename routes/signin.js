var express = require('express');
var superagent = require('superagent');
var router = express.Router();
var checkNotLogin = require('../utils/check.js').checkNotLogin;

router.get('/', checkNotLogin, function(req, res, next) {
    res.render('signin', {layout: false});
});

module.exports = router;