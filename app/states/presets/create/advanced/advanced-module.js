'use strict';

goog.provide('hpm.presets.create.advanced.module');

/**
 * @type {angular.Module}
 */
hpm.presets.create.advanced.module = angular.module(
    'hpm.presets.create.advanced',
    ['ui.router']
);

/**
 * @ngInject
 * @param {ui.router.$stateProvider} $stateProvider
 */
hpm.presets.create.advanced.module.configuration = function($stateProvider)
{
    $stateProvider.state('presets.create.advanced', {

        'url': '/advanced',

        'views': {

            '': {

                'templateUrl': '/states/presets/create/advanced/advanced.jade'

            }

        }

    });
};

/**
 * Module initialisation.
 */
hpm.presets.create.advanced.module
    .config(hpm.presets.create.advanced.module.configuration);
