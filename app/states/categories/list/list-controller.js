'use strict';

goog.provide('hpm.categories.list.Ctrl');

/**
 * Categories list controller.
 *
 * @param {hpm.categories.list.Service} CategoriesListService
 * @param {hpm.util.logger} logger
 * @    constructor
 * @ngInject
 */
hpm.categories.list.Ctrl = function(CategoriesListService, logger)
{
    /**
     * @type {hpm.categories.list.Service}
     */
    this.categoriesService = CategoriesListService;

    /**
     * @type {hpm.util.logger}
     */
    this.logger = logger;

    /**
     * @type {array}
     * @expose
     */
    this.categoryList = [];

    /**
     * Flag set when loading categories.
     *
     * @type {boolean}
     * @expose
     */
    this.isLoading = true;

    /**
     * Update category list.
     */
    this.getCategories();
};

/**
 * Get list of all categories.
 */
hpm.categories.list.Ctrl.prototype.getCategories = function()
{
    this.isLoading = true;

    /**
     * Called on successful retrieval of categories.
     *
     * @param {*} data
     * @this {hpm.categories.list.Ctrl}
     */
    function onSuccess(data) {
        this.categoryList = data.results;
    }

    /**
     * Called if error occured when fetching categories.
     *
     * @param {*} error
     * @this {hpm.categories.list.Ctrl}
     */
    function onError(error) {
        this.logger.error(error, 'Unable to get categories');
    }

    /**
     * Called after fetch operation complete (whether successful
     * or not)
     *
     * @this {hpm.categories.list.Ctrl}
     */
    function onComplete() {
        this.isLoading = false;
    }

    this.categoriesService.getCategories()
        .then(
            onSuccess.bind(this),
            onError.bind(this)
        )
        .then(
            onComplete.bind(this)
        );
};

/**
 * Cancel changes made to category.
 * Uses Breeze method `rejectChanges`.
 * See: http://www.breezejs.com/documentation/inside-entity
 *
 * @param {*} category
 * @expose
 */
hpm.categories.list.Ctrl.prototype.cancel = function(category)
{
    category.entityAspect.rejectChanges();
    category.beingEdited = false;
};

/**
 * Save a single category.
 *
 * @param {*} category
 * @expose
 */
hpm.categories.list.Ctrl.prototype.save = function(category)
{
    this.categoriesService.save(category)
        .then(function() {
            this.logger.success(
                'Successfully saved category "' + category.name + '"',
                'Saved Category'
            );

            category.beingEdited = false;
        }.bind(this));
};

/**
 * Mark category as being edited.
 *
 * @param {*} category
 * @expose
 */
hpm.categories.list.Ctrl.prototype.edit = function(category)
{
    category.beingEdited = true;
};
