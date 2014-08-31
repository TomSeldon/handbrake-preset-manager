'use strict';

/**
 * @fileoverview
 *
 * HPM: UI - Accordion module
 * ==========================
 */

goog.provide('hpm.ui.accordion.module');

goog.require('hpm.ui.accordion.Directive.factory');
goog.require('hpm.ui.accordion.item.Directive.factory');

/**
 * @type {angular.Module}
 */
hpm.ui.accordion.module = angular.module('hpm.ui.accordion', []);

// Accordion directive
hpm.ui.accordion.module.directive(
    'uiAccordion',
    hpm.ui.accordion.Directive.factory
);

// Accordion item directive
hpm.ui.accordion.module.directive(
    'uiAccordionItem',
    hpm.ui.accordion.item.Directive.factory
);
