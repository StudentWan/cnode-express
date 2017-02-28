var config = require('config-lite');
var express = require('express');
var routes = require('./routes');
var path = require('path');
var exphbs = require('express-handlebars');
var session = require('express-session');
var uuid = require('node-uuid');

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
//路由
routes(app);

app.listen(config.port, function () {
    console.log('Listening at port ' + config.port);
});