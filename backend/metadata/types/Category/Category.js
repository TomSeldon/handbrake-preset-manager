'use strict';

/**
 * @fileoverview
 *
 * Category metadata.
 */

/**
 * Entity type definition for category.
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
            associationName: 'Category_Presets',
            hasMany: true
        }

    }

};
