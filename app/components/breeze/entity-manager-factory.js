'use strict';

/**
 * @fileoverview
 * Factory for creating Breeze entity manager.
 * Adds metadata store to the generated entity
 * manager.
 */

goog.provide('hpm.breeze.entitymanager.Service');

/**
 * @param {breeze} breeze
 * @param {hpm.config.Service} config
 * @constructor
 * @ngInject
 */
hpm.breeze.entitymanager.Service = function(breeze, config)
{
    this.breeze = breeze;
    this.config = config;
    this.manager = null;
};

/**
 * @return {breeze.EntityManager}
 */
hpm.breeze.entitymanager.Service.prototype.newManager = function()
{
    return new this.breeze.EntityManager(
        this.config.breeze.serviceName
    );
};

/**
 * @return {breeze.EntityManager}
 */
hpm.breeze.entitymanager.Service.prototype.getManager = function()
{
    if (!this.manager) {
        this.manager = this.newManager();
    }

    return this.manager;
};
