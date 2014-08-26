'use strict';

goog.provide('hpm.categories.list.Service');

/**
 * @param {hpm.breeze.data.Service} dataService
 * @constructor
 * @ngInject
 */
hpm.categories.list.Service = function(dataService)
{
    /**
     * @type {hpm.breeze.data.Service}
     */
    this.dataService = dataService;
};

/**
 * @return {Boolean}
 */
hpm.categories.list.Service.prototype.hasChanges = function()
{
    return this.dataService.entityManager.hasChanges();
};

/**
 * Saves all changes.
 *
 * @return {Promise}
 */
hpm.categories.list.Service.prototype.saveChanges = function()
{
    return this.dataService.entityManager.saveChanges();
};

/**
 * @return {Promise}
 */
hpm.categories.list.Service.prototype.rejectChanges = function()
{
    return this.dataService.entityManager.rejectChanges();
};

/**
 * Create query for returning Categories.
 *
 * @return {breeze.EntityQuery}
 */
hpm.categories.list.Service.prototype.createQuery = function()
{
    return this.dataService
        .createQuery()
        .from('Categories')
        .orderBy('name');
};

/**
 * @return {*}
 * @expose
 */
hpm.categories.list.Service.prototype.getCategories = function()
{
    return this.dataService.executeQuery(
        this.createQuery()
    );
};

/**
 * Create a new Category entity.
 *
 * @return {*}
 */
hpm.categories.list.Service.prototype.createCategory = function()
{
    return this.dataService.entityManager.createEntity(
        'Category'
    );
};
