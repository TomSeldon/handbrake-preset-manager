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
 * @param {*} categoryEntity
 * @return {Promise}
 */
hpm.categories.list.Service.prototype.save = function(categoryEntity)
{
    return this.dataService.entityManager
        .saveChanges();
};

/**
 * @return {breeze.EntityQuery}
 */
hpm.categories.list.Service.prototype.createQuery = function()
{
    return this.dataService
        .createQuery()
        .from('Categories');
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
