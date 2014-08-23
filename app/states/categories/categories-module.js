'use strict';

goog.provide('hpm.categories.module');

goog.require('hpm.categories.detail.module');
goog.require('hpm.categories.list.module');

/**
 * Categories module.
 *
 * @type {angular.Module}
 */
hpm.categories.module = angular.module('categories', [
    'ui.router',
    hpm.categories.detail.module.name,
    hpm.categories.list.module.name
]);

/**
 * Configuration function.
 *
 * @param {ui.router.$stateProvider} $stateProvider
 * @ngInject
 */
hpm.categories.module.configuration = function($stateProvider)
{
    $stateProvider
        .state('categories', {
            'abstract': true,

            'url': '/categories',

            'template': '<div data-ui-view=""></div>'
        });
};

/**
 * Module initialisation.
 */
hpm.categories.module
    .config(hpm.categories.module.configuration);
