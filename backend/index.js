'use strict';

var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    chalk = require('chalk'),
    path = require('path'),
    routes = require('./routes');

var app, port, env;

app = express();
port = process.env.PORT || 3000;
env = process.env.NODE_ENV || 'development';

// Configure app
app.set('port', port);
app.set('view engine', 'jade');
app.set('views', path.resolve(__dirname + '/../app'));

// Middleware
app.use('/assets', express.static(
    path.resolve(__dirname + '/../build')
));

app.use('/vendor', express.static(
    path.resolve(__dirname + '/../bower_components')
));

app.use(bodyParser.urlencoded({extended: true}));

// Development settings
if (env === 'development') {
    var livereload = require('express-livereload');

    // Logger
    app.use(logger('dev'));

    // Livereload
    livereload(app, {
        watchDir: __dirname + '/../app'
    });

    // Service source files (for source map usage)
    app.use(process.cwd(), express.static(
        path.resolve(process.cwd())
    ));
}

// Init routes
routes.web.init(app);
routes.breeze.init(app);

// Start server
if (!module.parent) {
    // Only run if module is run directly
    app.listen(app.get('port'));
    console.log(
        chalk.green.bold('Server listening on port: %d'),
        app.get('port')
    );
}

/**
 * @type {*}
 */
module.exports = app;
