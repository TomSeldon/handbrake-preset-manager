'use strict';

goog.require('hpm.breeze.Config');
goog.require('hpm.categories.module');
goog.require('hpm.debug.state.module');
//goog.require('hpm.environment.Factory');
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

        // Internal dependencies
        // Components
        hpm.logger.module.name,
        hpm.debug.state.module.name,

        // States
        hpm.categories.module.name,
        hpm.presets.module.name
    ]
)
.config(config)
//.factory('environment', hpm.environment.Factory)
.directive('popup', hpm.semanticui.popup.Directive.factory);

/**
 * Configuration function.
 * @ngInject
 */
function config() {}
