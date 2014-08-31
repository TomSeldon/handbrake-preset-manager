'use strict';

goog.provide('hpm.presets.create.Ctrl');

/**
 * @param {angular.Scope} $scope
 * @param {hpm.data.presets.Service} PresetsService
 * @param {Object} preset
 * @param {Array} categories
 * @constructor
 * @ngInject
 */
hpm.presets.create.Ctrl = function($scope, PresetsService, preset, categories)
{
    /**
     * @type {angular.Scope}
     */
    this.scope = $scope;

    /**
     * @type {hpm.data.presets.Service}
     */
    this.presetsService = PresetsService;

    /**
     * @type {Array}
     */
    this.categories = categories;

    console.log(categories);

    /**
     * @type {Object|*}
     */
    this.preset = preset;

    // On controller destruction, remove the entity if it wasn't saved
    this.scope.$on('$destroy', this._destroy.bind(this));
};

/**
 * Fired on controller destruction.
 *
 * Here we check if the 'new' preset has been saved.
 *
 * If it hasn't, we want to clear it from the entity manager.
 */
hpm.presets.create.Ctrl.prototype._destroy = function()
{
    var unsaved = this.preset.entityAspect.entityState.name === 'Added';

    if (unsaved === true) {
        // Entity hasn't been saved, so mark for deletion
        this.preset.entityAspect.setDeleted();
    }
};

/**
 * Save changes present in the entity manager (i.e. the
 * created Preset).
 */
hpm.presets.create.Ctrl.prototype.save = function()
{
    this.presetsService.entityManager.saveChanges()
        .then(
            function() {},

            function(err) {
                console.error(err);
            }
        );
};

/**
 * Returns whether the new preset has changes.
 *
 * @return {*|Boolean}
 */
hpm.presets.create.Ctrl.prototype.hasChanges = function()
{
};
