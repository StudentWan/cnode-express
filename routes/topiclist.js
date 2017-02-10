var express = require('express');
var superagent = require('superagent');
var getTimeInfo = require('../utils/gettimeinfo.js');
var router = express.Router();

router.get('/', function (req, res, next) {
    superagent.get("https://cnodejs.org/api/v1/topics/?page=1")
        .end(function (err, sres) {
            var result = JSON.parse(sres.text);
            var data = result.data;
            for(i in data) {
                data[i].last_reply_at = getTimeInfo(data[i].last_reply_at);
            }
            res.render('home', {
                data: data
            });
        });
});

module.exports = router;