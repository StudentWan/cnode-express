var express = require('express');
var superagent = require('superagent');
var getTimeInfo = require('../utils/gettimeinfo.js');
var router = express.Router();

router.get('/', function (req, res, next) {
    var id = req.query.id;
    superagent.get("https://cnodejs.org/api/v1/topic/" + id)
        .end(function (err, sres) {
            var result = JSON.parse(sres.text);
            var data = result.data;
            data.create_at = getTimeInfo(data.create_at);

            if (data.top == true) {
                data.category = '置顶';
            } else if (data.good == true) {
                data.category = '精华';
            }

            if (data.tab == 'ask') {
                data.tab = '问答';
            } else if (data.tab == 'share') {
                data.tab = '分享';
            } else {
                data.tab = '招聘';
            }

            for( i in data.replies) {
                data.replies[i].create_at = getTimeInfo(data.replies[i].create_at); 
            }
            res.render('topic', {
                data: data,
                loginCheck: req.session.user
            });
        });
});

module.exports = router;