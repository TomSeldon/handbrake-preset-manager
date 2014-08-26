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
 * @return {*}
 * @expose
 */
hpm.data.categories.Service.prototype.getCategories = function()
{
    return this.entityManager.executeQuery(
        this.createQuery()
    );
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
