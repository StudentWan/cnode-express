var express = require('express');
var superagent = require('superagent');
var router = express.Router();

router.get('/', function(req, res, next) {
    var id = req.query.id;
    superagent.get("https://cnodejs.org/api/v1/topic/" + id)
        .end(function(err, sres) {
            var result = JSON.parse(sres.text);
            var data = result.data;
            console.log(data.replies);
            res.render('topic', {
                data: data
            });
        });
});

module.exports = router;