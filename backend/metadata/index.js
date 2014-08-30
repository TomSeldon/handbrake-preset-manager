'use strict';

/**
 * @fileoverview
 *
 * Breeze metadata.
 */

var helpers = require('./helpers'),
    store;

/**
 * Init method.
 *
 * Creates metadata store and populates it with
 * available type definitions.
 */
exports.init = function()
{
    // Import type definitions
    var typeDefinitions = require('./types');

    // Ensure required Breeze data type(s) exist
    helpers.configureBreeze();

    // Create and populate metadata store
    store = helpers.createMetadataStore();
    helpers.fillMetadataStore(store, typeDefinitions);
};

/**
 * Return serialized representation of metadata
 * that can be consumed by Breeze clients.
 *
 * @return {*|String}
 */
exports.getMetadata = function()
{
    if (!store) {
        exports.init();
    }

    return store.exportMetadata();
};
