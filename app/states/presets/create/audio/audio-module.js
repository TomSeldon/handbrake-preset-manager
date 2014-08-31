'use strict';

goog.provide('hpm.presets.create.audio.module');

/**
 * @type {angular.Module}
 */
hpm.presets.create.audio.module = angular.module(
    'hpm.presets.create.audio',
    ['ui.router']
);

/**
 * @ngInject
 * @param {ui.router.$stateProvider} $stateProvider
 */
hpm.presets.create.audio.module.configuration = function($stateProvider)
{
    $stateProvider.state('presets.create.audio', {

        'url': '/audio',

        'views': {

            '': {

                'templateUrl': '/states/presets/create/audio/audio.jade'

            }

        }

    });
};

/**
 * Module initialisation.
 */
hpm.presets.create.audio.module
    .config(hpm.presets.create.audio.module.configuration);
