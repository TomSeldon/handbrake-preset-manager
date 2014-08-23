'use strict';

goog.provide('hpm.categories.detail.module');

goog.require('hpm.categories.detail.Ctrl');

/**
 * Detail module for categories.
 *
 * @type {angular.Module}
 */
hpm.categories.detail.module = angular.module('categories.detail', [
    'ui.router'
]);

/**
 * @param {ui.router.$stateProvider} $stateProvider
 * @ngInject
 */
hpm.categories.detail.module.configuration = function($stateProvider)
{
    $stateProvider.state('categories.detail', {
        'url': '/{id:[0-9]{1,4}}',

        'templateUrl': '/states/categories/detail/detail.jade',

        'controller': 'CategoryDetailCtrl as categoryDetail'
    });
};

/**
 * Module initialisation.
 */
hpm.categories.detail.module
    .config(hpm.categories.detail.module.configuration)
    .controller('CategoryDetailCtrl', hpm.categories.detail.Ctrl);
