'use strict';

/**
 * @fileoverview
 *
 * Preset metadata.
 */

/**
 * Entity type definition for preset.
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

        categoryId: {
            type: 'MongoObjectId',
            required: true
        },

        description: {
            max: 150,
            required: false
        },

        output: {
            complexTypeName: 'OutputSettings'
        },

        video: {
            complexTypeName: 'VideoSettings'
        },

        picture: {
            complexTypeName: 'PictureSettings'
        }

    },

    navigationProperties: {

        category: {
            type: 'Category',
            foreignKeyNames: ['categoryId'],
            associationName: 'Preset_Category'
        }

    }

};
