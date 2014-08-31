'use strict';

goog.provide('hpm.presets.create.video.module');

/**
 * @type {angular.Module}
 */
hpm.presets.create.video.module = angular.module(
    'hpm.presets.create.video',
    ['ui.router']
);

/**
 * @ngInject
 * @param {ui.router.$stateProvider} $stateProvider
 */
hpm.presets.create.video.module.configuration = function($stateProvider)
{
    $stateProvider.state('presets.create.video', {

        'url': '/video',

        'views': {

            '': {

                'templateUrl': '/states/presets/create/video/video.jade'

            }

        }

    });
};

/**
 * Module initialisation.
 */
hpm.presets.create.video.module
    .config(hpm.presets.create.video.module.configuration);
