'use strict';

goog.provide('hpm.presets.list.Ctrl');

/**
 * Presets list controller.
 *
 * @param {hpm.data.presets.Service} PresetsService
 * @param {hpm.logger.Service} logger
 * @constructor
 * @ngInject
 */
hpm.presets.list.Ctrl = function(PresetsService, logger)
{
    /**
     * @type {hpm.data.presets.Service}
     */
    this.presetService = PresetsService;

    /**
     * @type {hpm.logger.Service}
     */
    this.logger = logger;

    /**
     * The list of presets to expose to the view.
     *
     * @expose
     * @type {Array}
     */
    this.presetsList = [];

    /**
     * Flag set when loading presets, or performing
     * some other async operation where we need to
     * lock the UI.
     *
     * @expose
     * @type {boolean}
     */
    this.isLoading = true;
};
