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
    /**
     * @type {!breeze}
     */
    this.breeze = breeze;

    /**
     * @type {!hpm.config.Service}
     */
    this.config = config;

    /**
     * @type {?breeze.EntityManager}
     */
    this.manager = null;

    /**
     * @type {breeze.MetadataStore}
     */
    this.metadataStore = new breeze.MetadataStore();

    /**
     * Expose API for creating and retrieving entity manager(s).
     */
    return {
        createManager: this.createManager,

        getSharedManager: this.getManager
    };
};

/**
 * @return {breeze.EntityManager}
 */
hpm.breeze.entitymanager.Service.prototype.createManager = function()
{
    return new this.breeze.EntityManager(
            {
                serviceName: this.config.breeze.serviceName,

                metadataStore: this.metadataStore
            }
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
