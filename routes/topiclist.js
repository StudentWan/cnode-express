var express = require('express');
var superagent = require('superagent');
var getTimeInfo = require('../utils/gettimeinfo.js');
var router = express.Router();

router.get('/', function (req, res, next) {
    var tabdata = {}
    if (req.query.current_tab == 'all') {
        tabdata = {
            'tab': req.query.current_tab,
            'class1': 'active',
            'class2': '',
            'class3': '',
            'class4': '',
            'class5': ''
        };
    } else if (req.query.current_tab == 'good') {
        tabdata = {
            'tab': req.query.current_tab,
            'class1': '',
            'class2': 'active',
            'class3': '',
            'class4': '',
            'class5': ''
        };
    } else if (req.query.current_tab == 'share') {
        tabdata = {
            'tab': req.query.current_tab,
            'class1': '',
            'class2': '',
            'class3': 'active',
            'class4': '',
            'class5': ''
        };
    } else if (req.query.current_tab == 'ask') {
        tabdata = {
            'tab': req.query.current_tab,
            'class1': '',
            'class2': '',
            'class3': '',
            'class4': 'active',
            'class5': ''
        };
    } else {
        tabdata = {
            'tab': req.query.current_tab,
            'class1': '',
            'class2': '',
            'class3': '',
            'class4': '',
            'class5': 'active'
        };
    }
    var pagedata = {};
    if (req.query.current_tab == 'all') {
        if (req.query.current_page <= 1 || req.query.current_page > 500) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': 'active',
                'href1': '#',
                'page1': '1',
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=2',
                'page2': '2',
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=3',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page == 2) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=1',
                'page1': '1',
                'class2': 'active',
                'href2': '#',
                'page2': '2',
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=3',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page == 3) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=1',
                'page1': '1',
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=2',
                'page2': '2',
                'class3': 'active',
                'href3': '#',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page >= 4 && req.query.current_page <= 497) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page1': parseInt(req.query.current_page) - 2,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page2': parseInt(req.query.current_page) - 1,
                'class3': 'active',
                'href3': '#',
                'page3': req.query.current_page,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page4': parseInt(req.query.current_page) + 1,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 2),
                'page5': parseInt(req.query.current_page) + 2,
                'style2': 'inline'
            }
        } else if (req.query.current_page == 498) {
            pagedata = {
                'current_page': req.query.current_page,
                'style': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page1': parseInt(req.query.current_page) - 2,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page2': parseInt(req.query.current_page) - 1,
                'class3': 'active',
                'href3': '#',
                'page3': req.query.current_page,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page4': parseInt(req.query.current_page) + 1,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 2),
                'page5': parseInt(req.query.current_page) + 2,
                'style2': 'none'
            }
        } else if (req.query.current_page == 499) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 3),
                'page1': parseInt(req.query.current_page) - 3,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page2': parseInt(req.query.current_page) - 2,
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page3': parseInt(req.query.current_page) - 1,
                'class4': 'active',
                'href4': '#',
                'page4': req.query.current_page,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page5': parseInt(req.query.current_page) + 1,
                'style2': 'none'
            }
        } else if (req.query.current_page == 500) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 4),
                'page1': parseInt(req.query.current_page) - 4,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 3),
                'page2': parseInt(req.query.current_page) - 3,
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page3': parseInt(req.query.current_page) - 2,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page4': (parseInt(req.query.current_page) - 1),
                'class5': 'active',
                'href5': '#',
                'page5': req.query.current_page,
                'style2': 'none'
            }
        }
        if (req.query.current_page > 500) req.query.current_page = 1;
    } else if (req.query.current_tab == 'good') {
        if (req.query.current_page <= 1 || req.query.current_page > 15) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': 'active',
                'href1': '#',
                'page1': '1',
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=2',
                'page2': '2',
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=3',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page == 2) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=1',
                'page1': '1',
                'class2': 'active',
                'href2': '#',
                'page2': '2',
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=3',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page == 3) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=1',
                'page1': '1',
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=2',
                'page2': '2',
                'class3': 'active',
                'href3': '#',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page >= 4 && req.query.current_page <= 12) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page1': parseInt(req.query.current_page) - 2,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page2': parseInt(req.query.current_page) - 1,
                'class3': 'active',
                'href3': '#',
                'page3': req.query.current_page,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page4': parseInt(req.query.current_page) + 1,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 2),
                'page5': parseInt(req.query.current_page) + 2,
                'style2': 'inline'
            }
        } else if (req.query.current_page == 13) {
            pagedata = {
                'current_page': req.query.current_page,
                'style': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page1': parseInt(req.query.current_page) - 2,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page2': parseInt(req.query.current_page) - 1,
                'class3': 'active',
                'href3': '#',
                'page3': req.query.current_page,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page4': parseInt(req.query.current_page) + 1,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 2),
                'page5': parseInt(req.query.current_page) + 2,
                'style2': 'none'
            }
        } else if (req.query.current_page == 14) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 3),
                'page1': parseInt(req.query.current_page) - 3,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page2': parseInt(req.query.current_page) - 2,
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page3': parseInt(req.query.current_page) - 1,
                'class4': 'active',
                'href4': '#',
                'page4': req.query.current_page,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page5': parseInt(req.query.current_page) + 1,
                'style2': 'none'
            }
        } else if (req.query.current_page == 15) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 4),
                'page1': parseInt(req.query.current_page) - 4,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 3),
                'page2': parseInt(req.query.current_page) - 3,
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page3': parseInt(req.query.current_page) - 2,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page4': (parseInt(req.query.current_page) - 1),
                'class5': 'active',
                'href5': '#',
                'page5': req.query.current_page,
                'style2': 'none'
            }
        }
        if (req.query.current_page > 15) req.query.current_page = 1;
    } else if (req.query.current_tab == 'share') {
        if (req.query.current_page <= 1 || req.query.current_page > 96) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': 'active',
                'href1': '#',
                'page1': '1',
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=2',
                'page2': '2',
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=3',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page == 2) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=1',
                'page1': '1',
                'class2': 'active',
                'href2': '#',
                'page2': '2',
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=3',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page == 3) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=1',
                'page1': '1',
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=2',
                'page2': '2',
                'class3': 'active',
                'href3': '#',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page >= 4 && req.query.current_page <= 93) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page1': parseInt(req.query.current_page) - 2,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page2': parseInt(req.query.current_page) - 1,
                'class3': 'active',
                'href3': '#',
                'page3': req.query.current_page,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page4': parseInt(req.query.current_page) + 1,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 2),
                'page5': parseInt(req.query.current_page) + 2,
                'style2': 'inline'
            }
        } else if (req.query.current_page == 94) {
            pagedata = {
                'current_page': req.query.current_page,
                'style': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page1': parseInt(req.query.current_page) - 2,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page2': parseInt(req.query.current_page) - 1,
                'class3': 'active',
                'href3': '#',
                'page3': req.query.current_page,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page4': parseInt(req.query.current_page) + 1,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 2),
                'page5': parseInt(req.query.current_page) + 2,
                'style2': 'none'
            }
        } else if (req.query.current_page == 95) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 3),
                'page1': parseInt(req.query.current_page) - 3,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page2': parseInt(req.query.current_page) - 2,
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page3': parseInt(req.query.current_page) - 1,
                'class4': 'active',
                'href4': '#',
                'page4': req.query.current_page,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page5': parseInt(req.query.current_page) + 1,
                'style2': 'none'
            }
        } else if (req.query.current_page == 96) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 4),
                'page1': parseInt(req.query.current_page) - 4,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 3),
                'page2': parseInt(req.query.current_page) - 3,
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page3': parseInt(req.query.current_page) - 2,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page4': (parseInt(req.query.current_page) - 1),
                'class5': 'active',
                'href5': '#',
                'page5': req.query.current_page,
                'style2': 'none'
            }
        }
        if (req.query.current_page > 96) req.query.current_page = 1;
    } else if (req.query.current_tab == 'ask') {
        if (req.query.current_page <= 1 || req.query.current_page > 187) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': 'active',
                'href1': '#',
                'page1': '1',
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=2',
                'page2': '2',
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=3',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page == 2) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=1',
                'page1': '1',
                'class2': 'active',
                'href2': '#',
                'page2': '2',
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=3',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page == 3) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=1',
                'page1': '1',
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=2',
                'page2': '2',
                'class3': 'active',
                'href3': '#',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page >= 4 && req.query.current_page <= 184) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page1': parseInt(req.query.current_page) - 2,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page2': parseInt(req.query.current_page) - 1,
                'class3': 'active',
                'href3': '#',
                'page3': req.query.current_page,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page4': parseInt(req.query.current_page) + 1,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 2),
                'page5': parseInt(req.query.current_page) + 2,
                'style2': 'inline'
            }
        } else if (req.query.current_page == 185) {
            pagedata = {
                'current_page': req.query.current_page,
                'style': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page1': parseInt(req.query.current_page) - 2,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page2': parseInt(req.query.current_page) - 1,
                'class3': 'active',
                'href3': '#',
                'page3': req.query.current_page,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page4': parseInt(req.query.current_page) + 1,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 2),
                'page5': parseInt(req.query.current_page) + 2,
                'style2': 'none'
            }
        } else if (req.query.current_page == 186) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 3),
                'page1': parseInt(req.query.current_page) - 3,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page2': parseInt(req.query.current_page) - 2,
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page3': parseInt(req.query.current_page) - 1,
                'class4': 'active',
                'href4': '#',
                'page4': req.query.current_page,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page5': parseInt(req.query.current_page) + 1,
                'style2': 'none'
            }
        } else if (req.query.current_page == 187) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 4),
                'page1': parseInt(req.query.current_page) - 4,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 3),
                'page2': parseInt(req.query.current_page) - 3,
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page3': parseInt(req.query.current_page) - 2,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page4': (parseInt(req.query.current_page) - 1),
                'class5': 'active',
                'href5': '#',
                'page5': req.query.current_page,
                'style2': 'none'
            }
        }
        if (req.query.current_page > 187) req.query.current_page = 1;
    } else {
        if (req.query.current_page <= 1 || req.query.current_page > 28) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': 'active',
                'href1': '#',
                'page1': '1',
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=2',
                'page2': '2',
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=3',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page == 2) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=1',
                'page1': '1',
                'class2': 'active',
                'href2': '#',
                'page2': '2',
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=3',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page == 3) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'none',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=1',
                'page1': '1',
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=2',
                'page2': '2',
                'class3': 'active',
                'href3': '#',
                'page3': '3',
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=4',
                'page4': '4',
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=5',
                'page5': '5',
                'style2': 'inline'
            }
        } else if (req.query.current_page >= 4 && req.query.current_page <= 25) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page1': parseInt(req.query.current_page) - 2,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page2': parseInt(req.query.current_page) - 1,
                'class3': 'active',
                'href3': '#',
                'page3': req.query.current_page,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page4': parseInt(req.query.current_page) + 1,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 2),
                'page5': parseInt(req.query.current_page) + 2,
                'style2': 'inline'
            }
        } else if (req.query.current_page == 26) {
            pagedata = {
                'current_page': req.query.current_page,
                'style': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page1': parseInt(req.query.current_page) - 2,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page2': parseInt(req.query.current_page) - 1,
                'class3': 'active',
                'href3': '#',
                'page3': req.query.current_page,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page4': parseInt(req.query.current_page) + 1,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 2),
                'page5': parseInt(req.query.current_page) + 2,
                'style2': 'none'
            }
        } else if (req.query.current_page == 27) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 3),
                'page1': parseInt(req.query.current_page) - 3,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page2': parseInt(req.query.current_page) - 2,
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page3': parseInt(req.query.current_page) - 1,
                'class4': 'active',
                'href4': '#',
                'page4': req.query.current_page,
                'class5': '',
                'href5': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) + 1),
                'page5': parseInt(req.query.current_page) + 1,
                'style2': 'none'
            }
        } else if (req.query.current_page == 28) {
            pagedata = {
                'current_page': req.query.current_page,
                'style1': 'inline',
                'class1': '',
                'href1': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 4),
                'page1': parseInt(req.query.current_page) - 4,
                'class2': '',
                'href2': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 3),
                'page2': parseInt(req.query.current_page) - 3,
                'class3': '',
                'href3': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 2),
                'page3': parseInt(req.query.current_page) - 2,
                'class4': '',
                'href4': '?current_tab=' + tabdata.tab + '&current_page=' + (parseInt(req.query.current_page) - 1),
                'page4': (parseInt(req.query.current_page) - 1),
                'class5': 'active',
                'href5': '#',
                'page5': req.query.current_page,
                'style2': 'none'
            }
        }
        if (req.query.current_page > 28) req.query.current_page = 1;
    }
    superagent.get("https://cnodejs.org/api/v1/topics/?tab=" + req.query.current_tab + "&page=" + req.query.current_page)
        .end(function (err, sres) {
            var result = JSON.parse(sres.text);
            var data = result.data;
            for (i in data) {
                data[i].create_at = getTimeInfo(data[i].create_at);
                if (data[i].top == true) {
                    data[i].tab = '置顶';
                } else if (data[i].good == true) {
                    data[i].tab = '精华';
                } else if (data[i].tab == 'ask') {
                    data[i].tab = '问答';
                } else if (data[i].tab == 'share') {
                    data[i].tab = '分享';
                } else {
                    data[i].tab = '招聘';
                }
            }
            res.render('home', {
                data: data,
                tabdata: tabdata,
                pagedata: pagedata
            });
        });

});

module.exports = router;