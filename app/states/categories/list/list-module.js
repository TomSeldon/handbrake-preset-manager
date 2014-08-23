'use strict';

goog.provide('hpm.categories.list.module');

goog.require('hpm.categories.list.Ctrl');
goog.require('hpm.semanticui.popup.Directive.factory');

/**
 * @type {angular.Module}
 */
hpm.categories.list.module = angular.module('categories.list', [
    'ui.router'
]);

/**
* @ngInject
* @param {ui.router.$stateProvider} $stateProvider
*/
hpm.categories.list.module.configuration = function($stateProvider)
{
    $stateProvider.state('categories.list', {
        'url': '',

        'templateUrl': '/states/categories/list/list.jade',

        'controller': 'CategoriesListCtrl as categories'
    });
};

hpm.categories.list.module
    .config(hpm.categories.list.module.configuration)
    .controller('CategoriesListCtrl', hpm.categories.list.Ctrl)
    .directive('popup', hpm.semanticui.popup.Directive.factory);
