'use strict';

goog.provide('hpm.presets.list.module');

goog.require('hpm.data.module');
goog.require('hpm.presets.list.Ctrl');

/**
 * @type {angular.Module}
 */
hpm.presets.list.module = angular.module('presets.list', [
    'ui.router',
    hpm.data.module.name
]);

/**
 * @ngInject
 * @param {ui.router.$stateProvider} $stateProvider
 */
hpm.presets.list.module.configuration = function($stateProvider)
{
    $stateProvider.state('presets.list', {

        'url': '',

        'views': {

            '': {

                'templateUrl': '/states/presets/list/list.jade',

                'controller': 'PresetsListCtrl as presets'

            },

            'tabledata@presets.list': {

                'templateUrl': '/states/presets/list/table.jade'

            },

            'menu@presets.list': {

                'templateUrl': '/states/presets/list/toolbar.jade'

            }

        }

    });
};

hpm.presets.list.module
    .config(hpm.presets.list.module.configuration)
    .controller('PresetsListCtrl', hpm.presets.list.Ctrl);
