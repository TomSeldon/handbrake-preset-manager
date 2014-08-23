'use strict';

goog.provide('hpm.presets.list.module');

goog.require('hpm.presets.list.Ctrl');
goog.require('hpm.semanticui.popup.Directive.factory');

/**
 * @type {angular.Module}
 */
hpm.presets.list.module = angular.module('presets.list', [
    'ui.router'
]);

/**
 * @ngInject
 * @param {ui.router.$stateProvider} $stateProvider
 */
hpm.presets.list.module.configuration = function($stateProvider)
{
    $stateProvider.state('presets.list', {
        'url': '',

        'templateUrl': '/states/presets/list/list.jade',

        'controller': 'PresetsListCtrl as presets'
    });
};

hpm.presets.list.module
    .config(hpm.presets.list.module.configuration)
    .controller('PresetsListCtrl', hpm.presets.list.Ctrl)
    .directive('popup', hpm.semanticui.popup.Directive.factory);
