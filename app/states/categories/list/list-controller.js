'use strict';

goog.provide('hpm.categories.list.Ctrl');

/**
 * Categories list controller.
 *
 * @param {hpm.categories.list.Service} CategoriesListService
 * @param {hpm.util.logger} logger
 * @constructor
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
     * TODO: Bind to EntityManager directly, if possible.
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
 * @return {Boolean}
 * @expose
 */
hpm.categories.list.Ctrl.prototype.hasChanges = function()
{
    return this.categoriesService.hasChanges();
};

/**
 * returns whether a category is pending deletion.
 *
 * @param {*} category
 * @return {boolean}
 * @expose
 */
hpm.categories.list.Ctrl.prototype.isPendingDeletion = function(category)
{
    return category.entityAspect.entityState.isDeleted();
};

/**
 * Cancel changes for a single category.
 *
 * @param {*} category
 * @expose
 */
hpm.categories.list.Ctrl.prototype.cancelChanges = function(category)
{
    this.categoriesService.rejectChanges(category);

    category.beingEdited = false;
};

/**
 * Cancel all changes.
 * @expose
 */
hpm.categories.list.Ctrl.prototype.cancelAllChanges = function()
{
    this.categoriesService.rejectChanges();

    this.categoryList.forEach(function(category) {
        category.beingEdited = false;
    });
};

/**
 * Save all changes.
 *
 * @expose
 */
hpm.categories.list.Ctrl.prototype.saveChanges = function()
{
    this.isLoading = true;

    this.categoriesService.saveChanges()
        .then(function() {
            this.logger.success(
                'Successfully saved changes',
                'Saved successfully'
            );
        }.bind(this))
        .then(this.getCategories.bind(this))
        .then(function() {
            this.categoryList.forEach(function(category) {
                 category.beingEdited = false;
            });

            this.isLoading = false;
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

/**
 * Check whether an entity is allowed to be edited.
 * An example use case would be to disable editing
 * whilst an entity is being saved.
 *
 * @param {*} category
 * @return {boolean}
 * @expose
 */
hpm.categories.list.Ctrl.prototype.canEdit = function(category)
{
    var saving = category.entityAspect.isBeingSaved,
        pendingDeletion = this.isPendingDeletion(category);

    return !saving && !pendingDeletion;
};

/**
 * Marks a category for deletion.
 *
 * @param {*} category
 */
hpm.categories.list.Ctrl.prototype.remove = function(category)
{
    category.entityAspect.rejectChanges();
    category.entityAspect.setDeleted();
    category.beingEdited = false;
};

/**
 * Create new Category.
 */
hpm.categories.list.Ctrl.prototype.createCategory = function()
{
    var category = this.categoriesService.createCategory();

    category.beingEdited = true;

    // Insert at start of list
    this.categoryList.splice(0, 0, category);
};
