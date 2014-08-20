'use strict';

goog.provide('hpm.presets.module');

goog.require('hpm.presets.Ctrl');
goog.require('hpm.presets.detail.module');
goog.require('hpm.presets.list.module');
goog.require('hpm.semanticui.popup.Directive.factory');

/**
 * Presets module.
 *
 * @type {angular.Module}
 */
hpm.presets.module = angular.module('presets', [
    'ui.router',
    hpm.presets.detail.module.name,
    hpm.presets.list.module.name
]);

/**
 * Configuration function.
 *
 * @param {ui.router.$stateProvider} $stateProvider
 * @ngInject
 */
hpm.presets.module.configuration = function($stateProvider)
{
    $stateProvider.state('presets', {
        url: '/presets',

        templateUrl: '/states/presets/presets.jade',

        controller: 'PresetsCtrl as presets'
    });
};

/**
 * Module initialisation.
 */
hpm.presets.module
    .config(hpm.presets.module.configuration)
    .controller('PresetsCtrl', hpm.presets.Ctrl)
    .directive('popup', hpm.semanticui.popup.Directive.factory);
