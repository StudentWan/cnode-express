var express = require('express');
var router = express.Router();
var checkLogin = require('../utils/check.js').checkLogin;

router.get('/', checkLogin, function(req, res, next) {
    delete req.session.user;
    req.flash('success', '登出成功！');
    return res.redirect('back');
});

module.exports = router;