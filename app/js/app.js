'use strict';

goog.require('hpm.presets.module');
goog.require('hpm.semanticui.popup.Directive.factory');

/**
 * Main app
 */
angular.module('hpm', [
        // Vendor dependencies
        'ui.router',
        'breeze.angular',

        // Internal dependencies
        hpm.presets.module.name
    ]
)
.config(config)
.directive('popup', hpm.semanticui.popup.Directive.factory);

/**
 * Configuration function.
 *
 * @param {ui.router.$stateProvider} $stateProvider
 * @param {ui.router.$urlRouterProvider} $urlRouterProvider
 * @ngInject
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/presets');
}
