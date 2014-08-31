'use strict';

goog.provide('hpm.ui.accordion.item.Directive.factory');

/**
 * @constructor
 */
hpm.ui.accordion.item.Directive = function() {};

/**
 * If this is the last item, then emit an event
 * so a parent scope can initialise the accordion.
 *
 * @param {angular.Scope} scope
 */
hpm.ui.accordion.item.Directive.prototype.link = function(scope)
{
    if (scope.$last) {
        scope.$emit('hpm.ui.accordion.item.last');
    }
};

/**
 * @ngInject
 * @return {Object}
 */
hpm.ui.accordion.item.Directive.factory = function()
{
    var directive = new hpm.ui.accordion.item.Directive();

    return {

        link: directive.link

    };
};
