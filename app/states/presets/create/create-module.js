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
 * Returns array of available categories.
 * Query result is resolved before controller instantiation.
 *
 * @ngInject
 * @param {hpm.category.Repository} CategoryRepository
 * @return {Promise|*}
 */
hpm.presets.create.module.categoriesResolveFn = function(CategoryRepository)
{
    return CategoryRepository.getCategories();
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

            categories: hpm.presets.create.module.categoriesResolveFn

        }

    });
};

/**
 * Module initialisation.
 */
hpm.presets.create.module
    .controller('PresetsCreateCtrl', hpm.presets.create.Ctrl)
    .config(hpm.presets.create.module.configuration);
