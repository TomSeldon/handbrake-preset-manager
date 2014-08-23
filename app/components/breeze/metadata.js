'use strict';

/**
 * @fileoverview
 *
 * Breeze metadata.
 *
 * Note the use of quotes around object keys:
 * Any code that should not be renamed on compilation,
 * such as code that is used with external modules,
 * should have an externs file or be referenced by
 * string values.
 */

goog.provide('hpm.breeze.metadata');

goog.require('hpm.breeze.metadata.Category');

/**
 * todo Replace structural types with injected properties
 * @type {{}}
 */
hpm.metadata = {

    'dataServices': [
        {
            'serviceName': 'breeze/hpm/',
            'hasServerMetadata': true,
            'jsonResultsAdapter': 'webApi_default',
            'useJsonp': false
        }
    ],

    'structuralTypes': [
        hpm.breeze.type.Category
        // hpm.breeze.type.Preset
    ]

};
