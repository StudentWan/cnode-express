var express = require('express');
var superagent = require('superagent');
var router = express.Router();
var checkNotLogin = require('../utils/check.js').checkNotLogin;

router.get('/', checkNotLogin, function(req, res, next) {
    res.render('signin', {layout: false});
});

router.post('/', checkNotLogin, function(req, res, next) {
    var accesstoken = req.fields.accessTokenInput;
    superagent.post('https://cnodejs.org/api/v1/accesstoken')
              .send({accesstoken: accesstoken})
              .end(function(err, sres) {
                  var result = JSON.parse(sres.text);
                  if(result.success == true) {
                      req.session.user = result.loginname;
                      req.flash('success', '登陆成功！');
                      return res.redirect('/topiclist');
                  } else {
                      req.flash('error', 'AccessToken错误！');
                      return res.redirect('back');
                  }
              });
});

module.exports = router;