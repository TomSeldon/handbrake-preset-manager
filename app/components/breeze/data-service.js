'use strict';

goog.provide('hpm.breeze.data.Service');

/**
 * @param {breeze} breeze
 * @param {*} entityManagerFactory
 * @constructor
 * @ngInject
 */
hpm.breeze.data.Service = function(breeze, entityManagerFactory)
{
    /**
     * @type {breeze}
     */
    this.breeze = breeze;

    /**
     * @type {breeze.EntityManager}
     * @expose
     */
    this.entityManager = entityManagerFactory.getManager();
};

/**
 * @return {string}
 */
hpm.breeze.data.Service.prototype.createMongoId = function()
{
    return this.breeze.DataType.MongoObjectId.getNext();
};

/**
 * @return {breeze.EntityQuery}
 * @expose
 */
hpm.breeze.data.Service.prototype.createQuery = function()
{
    return new this.breeze.EntityQuery();
};

/**
 * @param {breeze.EntityQuery} query
 * @return {*}
 * @expose
 */
hpm.breeze.data.Service.prototype.executeQuery = function(query)
{
    return this.entityManager
        .executeQuery(query);
};
