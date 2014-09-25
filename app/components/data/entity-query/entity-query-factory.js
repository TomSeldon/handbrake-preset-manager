'use strict';

goog.provide('hpm.EntityQueryFactory');

/**
 * @param {breeze} breeze
 * @constructor
 */
var EntityQueryFactory = function(breeze)
{
    /**
     * @type {EntityQuery}
     * @private
     */
    this.EntityQuery_ = breeze.EntityQuery;
};

/**
 * @return {EntityQuery}
 */
EntityQueryFactory.prototype.createQuery = function()
{
    return new this.EntityQuery_();
};

/**
 * @type {EntityQueryFactory}
 */
hpm.EntityQueryFactory = EntityQueryFactory;
