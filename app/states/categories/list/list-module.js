'use strict';

goog.provide('hpm.categories.list.module');

goog.require('hpm.categories.list.Ctrl');
goog.require('hpm.data.module');

/**
 * @type {angular.Module}
 */
hpm.categories.list.module = angular.module('categories.list', [
    'ui.router',
    hpm.data.module.name
]);

/**
* @ngInject
* @param {ui.router.$stateProvider} $stateProvider
*/
hpm.categories.list.module.configuration = function($stateProvider)
{
    $stateProvider.state('categories.list', {

        'url': '',

        'views': {

            '': {

                'templateUrl': '/states/categories/list/list.jade',

                'controller': 'CategoriesListCtrl as categories'

            },

            'tabledata@categories.list': {

                'templateUrl': '/states/categories/list/table.jade'

            },

            'menu@categories.list': {

                'templateUrl': '/states/categories/list/toolbar.jade'

            }

        }

    });
};

hpm.categories.list.module
    .config(hpm.categories.list.module.configuration)
    .controller('CategoriesListCtrl', hpm.categories.list.Ctrl);
