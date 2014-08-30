'use strict';

/**
 * @fileoverview
 *
 * HPM: UI - Popup module
 * ======================
 */

goog.provide('hpm.ui.popup.module');

goog.require('hpm.ui.popup.Directive.factory');

/**
 * @type {angular.Module}
 */
hpm.ui.popup.module = angular.module('hpm.ui.popup', []);

hpm.ui.popup.module.directive('uiPopup', hpm.ui.popup.Directive.factory);
