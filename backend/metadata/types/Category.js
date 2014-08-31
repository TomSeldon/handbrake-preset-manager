'use strict';

/**
 * @fileoverview
 *
 * Category metadata.
 */

var breeze = require('breeze-serverside');

/**
 * Entity type deifnition for category.
 *
 * @type {Object}
 */
module.exports = {

    name: 'Category',

    dataProperties: {

        _id: {
            type: 'MongoObjectId',
            isPartOfKey: true
        },

        name: {
            max: 50,
            required: true
        }

    },

    navigationProperties: {

        presets: {
            type: 'Preset',
            hasMany: true
        }

    }

};
