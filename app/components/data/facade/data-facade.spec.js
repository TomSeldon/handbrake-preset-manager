'use strict';

goog.require('hpm.DataFacade.module');

describe('DataFacade', function() {
    var dataFacade,
        $httpBackend;

    beforeEach(module(hpm.DataFacade.module.name));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        dataFacade = $injector.get('DataFacade');

        $httpBackend.when('GET', 'breeze/hpm/Metadata')
            .respond();
    }));

    it('should make a request for metadata in initialisation', function() {
        $httpBackend.expectGET('breeze/hpm/Metadata');
        $httpBackend.flush();
    });

    it('should be able to create arbitrary entities', function() {
        function createCategory() {
            dataFacade.createEntity('Category');
        }

        function createPreset() {
            dataFacade.createEntity('Preset');
        }

        expect(createCategory).not.toThrow();
        expect(createPreset).not.toThrow();
    });

    it('should be able to return new query instances', function() {
        expect(dataFacade.createQuery() instanceof breeze.EntityQuery)
            .toBe(true);
    });

    it('should be able to execute queries');

    it('should expose whether the entity manager has changes', function() {
        expect(dataFacade.hasChanges).toEqual(jasmine.any(Function));
        expect(dataFacade.hasChanges()).toBe(false);

        dataFacade.createEntity('Category');

        expect(dataFacade.hasChanges()).toBe(true);
    });

    it('should be able to save changes');

    it('should be able to cancel un-saved changes');
});
