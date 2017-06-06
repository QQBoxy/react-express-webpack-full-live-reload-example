module.exports = function (app) {
    app.use('/', require('./home'));
    app.use('/page2', require('./page2'));
};
