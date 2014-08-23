'use strict';

goog.provide('hpm.presets.module');

goog.require('hpm.presets.detail.module');
goog.require('hpm.presets.list.module');

/**
 * Presets module.
 *
 * @type {angular.Module}
 */
hpm.presets.module = angular.module('presets', [
    'ui.router',
    hpm.presets.detail.module.name,
    hpm.presets.list.module.name
]);

/**
 * Configuration function.
 *
 * @param {ui.router.$stateProvider} $stateProvider
 * @ngInject
 */
hpm.presets.module.configuration = function($stateProvider)
{
    $stateProvider
        .state('presets', {
            'abstract': true,

            'url': '/presets',

            'template': '<div data-ui-view=""></div>'
        });
};

/**
 * Module initialisation.
 */
hpm.presets.module
    .config(hpm.presets.module.configuration);
