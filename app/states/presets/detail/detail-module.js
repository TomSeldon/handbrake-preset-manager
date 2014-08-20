'use strict';

goog.provide('hpm.presets.detail.module');

goog.require('hpm.presets.detail.Ctrl');

/**
 * Detail module for presets.
 *
 * @type {angular.Module}
 */
hpm.presets.detail.module = angular.module('presets.detail', [
    'ui.router'
]);

/**
 * @param {ui.router.$stateProvider} $stateProvider
 * @ngInject
 */
hpm.presets.detail.module.configuration = function($stateProvider)
{
    $stateProvider.state('presets.detail', {
        url: '/{presetId:[0-9]{1,4}}',

        templateUrl: 'states/presets/detail/detail.jade',

        controller: 'PresetDetailCtrl as presetDetail'
    });
};

/**
 * Module initialisation.
 */
hpm.presets.detail.module
    .config(hpm.presets.detail.module.configuration)
    .controller('PresetDetailCtrl', hpm.presets.detail.Ctrl);
