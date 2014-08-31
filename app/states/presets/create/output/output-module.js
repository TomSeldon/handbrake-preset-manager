'use strict';

goog.provide('hpm.presets.create.output.module');

/**
 * @type {angular.Module}
 */
hpm.presets.create.output.module = angular.module(
    'hpm.presets.create.output',
    ['ui.router']
);

/**
 * @ngInject
 * @param {ui.router.$stateProvider} $stateProvider
 */
hpm.presets.create.output.module.configuration = function($stateProvider)
{
    $stateProvider.state('presets.create.output', {

        'url': '/output',

        'views': {

            '': {

                'templateUrl': '/states/presets/create/output/output.jade'

            }

        }

    });
};

/**
 * Module initialisation.
 */
hpm.presets.create.output.module
    .config(hpm.presets.create.output.module.configuration);
