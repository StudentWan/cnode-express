var config = require('config-lite');
var flash = require('connect-flash');
var express = require('express');
var routes = require('./routes');
var path = require('path');
var exphbs = require('express-handlebars');
var session = require('express-session');
var uuid = require('node-uuid');
var formidable = require('express-formidable');
var EventEmitter = require('events').EventEmitter;
EventEmitter.defaultMaxListeners = 0;
var eventListener = new EventEmitter();
eventListener.setMaxListeners(0);
var app = express();

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        },
        ifCond: function (v1, v2, options) {
            if (v1 === v2) {
                return options.fn(this);
            }
            return options.inverse(this);
        }
    }
}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    genid: function(req) {
        return uuid.v1();
    },
    secret: config.session.secret,
    cookie: {
        maxAge: config.session.maxAge
    }
}));
app.use(flash());
app.use(formidable());

//添加模板必须变量
app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});
//路由
routes(app);

app.listen(config.port, function () {
    console.log('Listening at port ' + config.port);
});