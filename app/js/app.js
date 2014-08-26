'use strict';

goog.require('hpm.breeze.module');
goog.require('hpm.categories.module');
goog.require('hpm.config.Service');
goog.require('hpm.debug.state.module');
goog.require('hpm.logger.module');
goog.require('hpm.presets.module');
goog.require('hpm.semanticui.popup.Directive.factory');

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
        hpm.data.module.name,
        hpm.logger.module.name,
        hpm.debug.state.module.name,

        // States
        hpm.categories.module.name,
        hpm.presets.module.name
    ]
)
.config(config)
.run(run)
.service('config', hpm.config.Service)
.directive('popup', hpm.semanticui.popup.Directive.factory);

/**
 * Configuration function.
 *
 * @ngInject
 * @param {Object} config
 * @param {Object} toastrConfig
 */
function run(config, toastrConfig) {
    // Set toastr config
    angular.extend(toastrConfig, config.toastr);
}

/**
 * @ngInject
 */
function config() {}
