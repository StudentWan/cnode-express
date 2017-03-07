var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    return res.redirect('https://www.google.com.hk/#hl=zh-CN&q=site:cnodejs.org+' + req.fields.search_content);
});

module.exports = router;