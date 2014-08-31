'use strict';

goog.provide('hpm.presets.create.basic.module');

/**
 * @type {angular.Module}
 */
hpm.presets.create.basic.module = angular.module(
    'hpm.presets.create.basic',
    ['ui.router']
);

/**
 * @ngInject
 * @param {ui.router.$stateProvider} $stateProvider
 */
hpm.presets.create.basic.module.configuration = function($stateProvider)
{
    $stateProvider.state('presets.create.basic', {

        'url': '/basic',

        'views': {

            '': {

                'templateUrl': '/states/presets/create/basic/basic.jade'

            }

        }

    });
};

/**
 * Module initialisation.
 */
hpm.presets.create.basic.module
    .config(hpm.presets.create.basic.module.configuration);
