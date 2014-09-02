'use strict';

goog.require('hpm.categories.module');
goog.require('hpm.config.module');
goog.require('hpm.debug.state.module');
goog.require('hpm.logger.module');
goog.require('hpm.presets.module');
goog.require('hpm.ui.module');

/**
 * Main app
 */
angular.module('hpm', [
        // Vendor dependencies
        'ui.router',
        'breeze.directives',
        'toastr',

        // Internal dependencies
        // Components
        hpm.config.module.name,
        hpm.data.module.name,
        hpm.logger.module.name,
        hpm.debug.state.module.name,
        hpm.ui.module.name,

        // States
        hpm.categories.module.name,
        hpm.presets.module.name
    ]
)
.run(toastrConfig)
.run(initializeDataContext);

/**
* Configuration function.
*
* @ngInject
* @param {Object} config
* @param {Object} toastrConfig
*/
function toastrConfig(config, toastrConfig) {
    // Set toastr config
    angular.extend(toastrConfig, config.toastr);
}

/**
* Initialize the data context with the entities
* it requires.
*
* @ngInject
* @param {hpm.data.Service} DataContext
*/
function initializeDataContext(DataContext) {
    DataContext.initialize();
}
