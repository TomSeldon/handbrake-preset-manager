'use strict';

/**
 * @fileoverview
 *
 * HPM: UI - Accordion directive
 * =============================
 *
 * Simple directive that instantiates an element
 * as a Semantic UI accordion.
 */

goog.provide('hpm.ui.accordion.Directive.factory');

/**
 * Semantic UI accordion directive.
 *
 * @constructor
 */
hpm.ui.accordion.Directive = function() {};

/**
 * @param {angular.Scope} scope
 * @param {angular.Element} element
 */
hpm.ui.accordion.Directive.prototype.link = function(scope, element) {
    // Initialise Semantic UI accordion
    angular.element(element).accordion();
};

/**
 * Semantic UI Accordion directive.
 *
 * @return {Object}
 * @ngInject
 */
hpm.ui.accordion.Directive.factory = function()
{
    var directive = new hpm.ui.accordion.Directive();

    return {
        link: directive.link
    };
};
