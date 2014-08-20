'use strict';

/**
 * @type {{init: configureRoutes}}
 */
module.exports = {
    init: configureRoutes
};

/**
 * Config routes for web front-end.
 *
 * @param {*} app
 */
function configureRoutes(app) {
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get(/\/(states\/.+\.jade)/, function(req, res) {
        var partial;

        partial = req.params[0];

        res.render(partial);
    });
}
