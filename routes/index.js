module.exports = function(app) {
    app.get('/', function(req, res) {
        if(req.query.current_page == undefined) {
            req.query.current_page = 1;
        }
        res.redirect('/topiclist?current_page=' + req.query.current_page);
    });

    app.use('/topiclist', require('./topiclist'));
}