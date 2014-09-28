'use strict';

goog.provide('hpm.preset.module');

describe('PresetRepository', function() {
    var repository;

    beforeEach(module(hpm.preset.module.name));

    beforeEach(inject(function($injector) {
        repository = $injector.get('PresetRepository');
    }));

    it('should be able to create a new preset');

    it('should be able to return all presets');

    it('should be able to search for presets');

    it('should be able to search for and return a preset by it\'s ID');
});
