'use strict';

goog.provide('hpm.presets.create.module');

goog.require('hpm.presets.create.Ctrl');
goog.require('hpm.presets.create.advanced.module');
goog.require('hpm.presets.create.audio.module');
goog.require('hpm.presets.create.basic.module');
goog.require('hpm.presets.create.output.module');
goog.require('hpm.presets.create.video.module');

/**
 * @type {angular.Module}
 */
hpm.presets.create.module = angular.module('hpm.presets.create', [
    'ui.router',
    hpm.presets.create.advanced.module.name,
    hpm.presets.create.audio.module.name,
    hpm.presets.create.basic.module.name,
    hpm.presets.create.output.module.name,
    hpm.presets.create.video.module.name
]);

/**
 * Returns a new preset object. This requires
 * metadata to be fetched first, which is an async
 * operation and hence this is used as a resolver
 * function which is run before controller instantiation.
 *
 * @ngInject
 * @param {hpm.data.presets.Service} PresetsService
 */
hpm.presets.create.module.presetResolveFn = function(PresetsService)
{
    PresetsService.entityManager.fetchMetadata()
        .then(function() {
            return PresetsService.createPreset();
        });
};

/**
 * @ngInject
 * @param {ui.router.$stateProvider} $stateProvider
 * @param {ui.router.$urlRouterProvider} $urlRouterProvider
 */
hpm.presets.create.module.configuration = function(
    $stateProvider,
    $urlRouterProvider
) {
    // Redirect to basic state on load
    $urlRouterProvider.when('/presets/create', '/presets/create/basic');

    $stateProvider.state('presets.create', {

        'url': '/create',

        'views': {

            '': {

                'templateUrl': '/states/presets/create/create.jade',

                'controller': 'PresetsCreateCtrl as presetCreate'

            },

            'menu@presets.create': {

                'templateUrl': '/states/presets/create/menu.jade'

            }

        },

        'resolve': {

            preset: hpm.presets.create.module.presetResolveFn

        }

    });
};

/**
 * Module initialisation.
 */
hpm.presets.create.module
    .controller('PresetsCreateCtrl', hpm.presets.create.Ctrl)
    .config(hpm.presets.create.module.configuration);
