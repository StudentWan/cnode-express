var express = require('express');
var superagent = require('superagent');
var router = express.Router();
var checkLogin = require('../utils/check.js').checkLogin;

router.post('/', checkLogin, function (req, res, next) {
    superagent.post('https://cnodejs.org/api/v1/topic/' + req.fields.topic_id + '/replies')
        .send({
            accesstoken: req.session.accessToken,
            content: req.fields.content,
            reply_id: req.fields.reply_id
        })
        .end(function (err, sres) {
            var result = JSON.parse(sres.text);
            if (result.success == true) {
                return res.redirect('back');
            }
        });
});

module.exports = router;