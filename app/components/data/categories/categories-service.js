'use strict';

goog.provide('hpm.data.categories.Service');

/**
 * @param {breeze} breeze
 * @param {*} entityManagerFactory
 * @constructor
 * @ngInject
 */
hpm.data.categories.Service = function(breeze, entityManagerFactory)
{
    /**
     * @type {breeze}
     */
    this.breeze = breeze;

    /**
     * Create a new EM for dealing with categories.
     *
     * @type {breeze.EntityManager}
     */
    this.entityManager = entityManagerFactory.newManager();
};

/**
 * @return {Boolean}
 */
hpm.data.categories.Service.prototype.hasChanges = function()
{
    return this.entityManager.hasChanges();
};

/**
 * Saves all changes to category entities.
 *
 * @return {Promise}
 */
hpm.data.categories.Service.prototype.saveChanges = function()
{
    return this.entityManager.saveChanges();
};

/**
 * @return {Promise}
 */
hpm.data.categories.Service.prototype.rejectChanges = function()
{
    return this.entityManager.rejectChanges();
};

/**
 * Create query for returning Categories.
 *
 * @return {breeze.EntityQuery}
 */
hpm.data.categories.Service.prototype.createQuery = function()
{
    return new this.breeze.EntityQuery()
        .from('Categories')
        .orderBy('name');
};

/**
 * Perform a new query for retrieving category
 * entities. If a query is not specified, a new
 * EntityQuery is created that will return all
 * categories.
 *
 * @param {breeze.EntityQuery=} query
 * @return {*}
 * @expose
 */
hpm.data.categories.Service.prototype.getCategories = function(query)
{
    query = query || this.createQuery();

    return this.entityManager.executeQuery(query);
};

/**
 * Perform a query against the entities already present
 * in the entity manager. No remote request is made.
 *
 * If a query is not specified, a new EntityQuery will
 * be created that will match all categories.
 *
 * @param {breeze.EntityQuery=} query
 * @return {*}
 * @expose
 */
hpm.data.categories.Service.prototype.getCategoriesFromCache = function(query)
{
    query = query || this.createQuery();

    return this.entityManager.executeQueryLocally(query);
};

/**
 * Create a new Category entity.
 *
 * @return {*}
 */
hpm.data.categories.Service.prototype.createCategory = function()
{
    return this.entityManager.createEntity('Category');
};
