var express = require('express');
var superagent = require('superagent');
var getTimeInfo = require('../utils/gettimeinfo.js');
var router = express.Router();

router.get('/', function (req, res, next) {
    var pagedata = {};
if (req.query.current_page <= 1 || req.query.current_page > 500) {
        pagedata = {
            'current_page': req.query.current_page,
            'style1': 'none',
            'class1': 'active',
            'href1': '#',
            'page1': '1',
            'class2': '',
            'href2': '?current_page=2',
            'page2': '2',
            'class3': '',
            'href3': '?current_page=3',
            'page3': '3',
            'class4': '',
            'href4': '?current_page=4',
            'page4': '4',
            'class5': '',
            'href5': '?current_page=5',
            'page5': '5',
            'style2': 'inline'
        }
    } else if (req.query.current_page == 2) {
        pagedata = {
            'current_page': req.query.current_page,
            'style1': 'none',
            'class1': '',
            'href1': '?current_page=1',
            'page1': '1',
            'class2': 'active',
            'href2': '#',
            'page2': '2',
            'class3': '',
            'href3': '?current_page=3',
            'page3': '3',
            'class4': '',
            'href4': '?current_page=4',
            'page4': '4',
            'class5': '',
            'href5': '?current_page=5',
            'page5': '5',
            'style2': 'inline'
        }
    } else if (req.query.current_page == 3) {
        pagedata = {
            'current_page': req.query.current_page,
            'style1': 'none',
            'class1': '',
            'href1': '?current_page=1',
            'page1': '1',
            'class2': '',
            'href2': '?current_page=2',
            'page2': '2',
            'class3': 'active',
            'href3': '#',
            'page3': '3',
            'class4': '',
            'href4': '?current_page=4',
            'page4': '4',
            'class5': '',
            'href5': '?current_page=5',
            'page5': '5',
            'style2': 'inline'
        }
    } else if (req.query.current_page >= 4 && req.query.current_page <= 497) {
        pagedata = {
            'current_page': req.query.current_page,
            'style1': 'inline',
            'class1': '',
            'href1': '?current_page=' + (parseInt(req.query.current_page) - 2),
            'page1': parseInt(req.query.current_page) - 2,
            'class2': '',
            'href2': '?current_page=' + (parseInt(req.query.current_page) - 1),
            'page2': parseInt(req.query.current_page) - 1,
            'class3': 'active',
            'href3': '#',
            'page3': req.query.current_page,
            'class4': '',
            'href4': '?current_page=' + (parseInt(req.query.current_page) + 1),
            'page4': parseInt(req.query.current_page) + 1,
            'class5': '',
            'href5': '?current_page=' + (parseInt(req.query.current_page) + 2),
            'page5': parseInt(req.query.current_page) + 2,
            'style2': 'inline'
        }
    } else if (req.query.current_page == 498) {
        pagedata = {
            'current_page': req.query.current_page,
            'style': 'inline',
            'class1': '',
            'href1': '?current_page=' + (parseInt(req.query.current_page) - 2),
            'page1': parseInt(req.query.current_page) - 2,
            'class2': '',
            'href2': '?current_page=' + (parseInt(req.query.current_page) - 1),
            'page2': parseInt(req.query.current_page) - 1,
            'class3': 'active',
            'href3': '#',
            'page3': req.query.current_page,
            'class4': '',
            'href4': '?current_page=' + (parseInt(req.query.current_page) + 1),
            'page4': parseInt(req.query.current_page) + 1,
            'class5': '',
            'href5': '?current_page=' + (parseInt(req.query.current_page) + 2),
            'page5': parseInt(req.query.current_page) + 2,
            'style2': 'none'
        }
    } else if (req.query.current_page == 499) {
        pagedata = {
            'current_page': req.query.current_page,
            'style1': 'inline',
            'class1': '',
            'href1': '?current_page=' + (parseInt(req.query.current_page) - 3),
            'page1': parseInt(req.query.current_page) - 3,
            'class2': '',
            'href2': '?current_page=' + (parseInt(req.query.current_page) - 2),
            'page2': parseInt(req.query.current_page) - 2,
            'class3': '',
            'href3': '?current_page=' + (parseInt(req.query.current_page) - 1),
            'page3': parseInt(req.query.current_page) - 1,
            'class4': 'active',
            'href4': '#',
            'page4': req.query.current_page,
            'class5': '',
            'href5': '?current_page=' + (parseInt(req.query.current_page) + 1),
            'page5': parseInt(req.query.current_page) + 1,
            'style2': 'none'
        }
    } else if (req.query.current_page == 500) {
        pagedata = {
            'current_page': req.query.current_page,
            'style1': 'inline',
            'class1': '',
            'href1': '?current_page=' + (parseInt(req.query.current_page) - 4),
            'page1': parseInt(req.query.current_page) - 4,
            'class2': '',
            'href2': '?current_page=' + (parseInt(req.query.current_page) - 3),
            'page2': parseInt(req.query.current_page) - 3,
            'class3': '',
            'href3': '?current_page=' + (parseInt(req.query.current_page) - 2),
            'page3': parseInt(req.query.current_page) - 2,
            'class4': '',
            'href4': '?current_page=' + (parseInt(req.query.current_page) - 1),
            'page4': (parseInt(req.query.current_page) - 1),
            'class5': 'active',
            'href5': '#',
            'page5': req.query.current_page,
            'style2': 'none'
        }
    }
    if(req.query.current_page>500) req.query.current_page = 1;
    superagent.get("https://cnodejs.org/api/v1/topics/?page=" + req.query.current_page)
        .end(function (err, sres) {
            var result = JSON.parse(sres.text);
            var data = result.data;
            for (i in data) {
                data[i].create_at = getTimeInfo(data[i].create_at);
            }
            res.render('home', {
                data: data,
                pagedata: pagedata
            });
        });

});

module.exports = router;