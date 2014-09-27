'use strict';

goog.provide('hpm.EntityQueryFactory');

/**
 * @ngInject
 * @param {breeze} breeze
 * @constructor
 */
var EntityQueryFactory = function(breeze)
{
    /**
     * @type {breeze}
     * @private
     */
    this.breeze_ = breeze;
};

/**
 * @return {breeze.EntityQuery}
 */
EntityQueryFactory.prototype.createQuery = function()
{
    return this.breeze_.EntityQuery;
};

/**
 * @type {EntityQueryFactory}
 */
hpm.EntityQueryFactory = EntityQueryFactory;
