'use strict';

goog.provide('hpm.DataFacade.Service');

/**
 * @param {*} EntityManagerFactory
 * @param {hpm.EntityQueryFactory} EntityQueryFactory
 * @constructor
 */
var DataFacade = function(EntityManagerFactory, EntityQueryFactory)
{
    /**
     * @type {EntityManager}
     * @private
     */
    this.manager_ = EntityManagerFactory.createManager();

    /**
     * @type {hpm.EntityQueryFactory}
     * @private
     */
    this.entityQueryFactory_ = EntityQueryFactory;
};

/**
 * @param {String} entityType
 * @return {*|Entity}
 */
DataFacade.prototype.createEntity = function(entityType)
{
    return this.manager_.createEntity(entityType);
};

/**
 * @return {*|EntityQuery}
 */
DataFacade.prototype.createQuery = function()
{
    return this.entityQueryFactory_.createQuery();
};

/**
 * @param {EntityQuery} query
 * @return {*|Promise}
 */
DataFacade.prototype.executeQuery = function(query)
{
    return this.manager_.executeQuery(query);
};

/**
 * @return {Boolean}
 */
DataFacade.prototype.hasChanges = function()
{
    return this.manager_.hasChanges();
};

/**
 * @return {*|Promise}
 */
DataFacade.prototype.saveChanges = function()
{
    return this.manager_.saveChanges();
};

/**
 * @return {*}
 */
DataFacade.prototype.rejectChanges = function()
{
    return this.manager_.rejectChanges();
};

/**
 * @type {DataFacade}
 */
hpm.DataFacade.Service = DataFacade;
