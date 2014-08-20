'use strict';

goog.provide('hpm.presets.list.module');

/**
 * @type {angular.Module}
 */
hpm.presets.list.module = angular.module('presets.list', [
    'ui.router'
]);

/**
 * @ngInject
 * @param {ui.router.$stateProvider} $stateProvider
 */
hpm.presets.list.module.configuration = function($stateProvider)
{
    $stateProvider.state('presets.list', {
        url: '/list',

        templateUrl: '/states/presets/list/list.jade'
    });
};

hpm.presets.list.module
    .config(hpm.presets.list.module.configuration);
