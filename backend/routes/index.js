'use strict';

var webRoutes = require('./web'),
    breezeRoutes = require('./breeze');

/**
 * @type {{init: init}}
 */
module.exports = {
    web: webRoutes,
    breeze: breezeRoutes
};
