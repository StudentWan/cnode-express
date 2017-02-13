module.exports = function (app) {
    app.get('/', function (req, res) {
        if (req.query.current_page == undefined) {
            req.query.current_page = 1;
        }
        if (req.query.current_tab == undefined) {
            req.query.current_tab = 'all';
        }
        res.redirect('/topiclist?current_tab=' + req.query.current_tab + '&current_page=' + req.query.current_page);
    });

    app.use('/topiclist', require('./topiclist'));
}