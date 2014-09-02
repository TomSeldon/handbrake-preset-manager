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
    this.api = {
        createManager: this.createManager,
        getSharedManager: this.getManager
    };

    /**
     * Expose the above declared API, after binding each method
     * to the correct context.
     */
    return this.exposeApi();
};

/**
 * Exposes the service's API after binding the methods
 * to the correct context.
 *
 * @return {{createManager: *, getSharedManager: (Function|getManager)}|*}
 */
hpm.breeze.entitymanager.Service.prototype.exposeApi = function()
{
    for (var methodName in this.api) {
        if (this.api.hasOwnProperty(methodName)) {
            this.api[methodName] = this.api[methodName].bind(this);
        }
    }

    return this.api;
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
        this.manager = this.createManager();
    }

    return this.manager;
};
