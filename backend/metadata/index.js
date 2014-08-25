'use strict';

/**
 * @fileoverview
 *
 * Breeze metadata.
 */

/**
 * @type {{}}
 */
module.exports = {

    structuralTypes: [
        require('./Category'),
        require('./Preset')
    ],

    resourceEntityMap: {
        Categories: 'Category:#hpm.Model',
        Presets: 'Preset:#hpm.Model'
    }

};

