'use strict';

/**
 * @fileoverview
 *
 * Preset metadata.
 */

var breeze = require('breeze-serverside');

/**
 * Entity type deifnition for category.
 *
 * @type {Object}
 */
module.exports = {

    name: 'Preset',

    dataProperties: {

        _id: {
            type: 'MongoObjectId',
            isPartOfKey: true
        },

        name: {
            max: 50,
            required: true
        },

        description: {
            max: 150,
            required: false
        },

        // Output settings
        fileFormat: {
            required: true
        },

        largeFileSize: {
            type: 'Boolean',
            defaultValue: false
        },

        webOptimized: {
            type: 'Boolean',
            defaultValue: false
        },

        ipod5gSupport: {
            type: 'Boolean',
            defaultValue: false
        }

    },

    navigationProperties: {

        category: {
            type: 'Category'
        }

    }

};
