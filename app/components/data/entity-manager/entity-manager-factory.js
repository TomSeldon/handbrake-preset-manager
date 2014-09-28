'use strict';

goog.provide('hpm.EntityManagerFactory');

/**
 * @ngInject
 * @param {breeze} breeze
 * @param {hpm.config} config
 * @constructor
 */
var EntityManagerFactory = function(breeze, config)
{
    /**
     * @type {EntityManager|breeze.EntityManager}
     * @private
     */
    this.EntityManager_ = breeze.EntityManager;

    /**
     * @type {breeze.MetadataStore}
     * @private
     */
    this.store_ = new breeze.MetadataStore();

    /**
     * @type {hpm.config}
     * @private
     */
    this.config_ = config;

    this.store_.fetchMetadata(this.config_.breeze.serviceName);
};

/**
 * @return {EntityManagerFactory.EntityManager_}
 */
EntityManagerFactory.prototype.createManager = function()
{
    return new this.EntityManager_(
        {
            serviceName: this.config_.breeze.serviceName,

            metadataStore: this.store_
        }
    );
};

/**
 * @type {EntityManagerFactory}
 */
hpm.EntityManagerFactory = EntityManagerFactory;
