var config = require('config-lite');
var express = require('express');
var routes = require('./routes');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: {
        section: function (name, block) {
            if (!this._sections) this._sections = {};
            this._sections[name] = block.fn(this);
            return null;
        }
    }
}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));

//路由
routes(app);

app.listen(config.port, function() {
    console.log('Listening at port ' + config.port);
});