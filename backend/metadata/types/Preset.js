'use strict';

/**
 * @fileoverview
 *
 * Preset structural type.
 */

var breeze = require('breeze-serverside'),
    mongoId = breeze.DataType.MongoObjectId;

/**
 * Entity type deifnition for category.
 *
 * @type {Object}
 */
module.exports = {

    shortName: 'Category',

    dataProperties: {

        id: {
            type: mongoId
        },

        name: {
            max: 50,
            nullOk: false
        }

    }

};
