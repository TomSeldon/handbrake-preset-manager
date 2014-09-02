'use strict';

goog.require('hpm.data.module');

describe('Data service', function() {

    var service, mockBreeze, mockEmFactory, mockEm, mockQuery;

    beforeEach(function() {
        angular.module('hpm.breeze', []);
        module(hpm.data.module.name);
    });

    beforeEach(module(function($provide) {
        mockQuery = {};

        mockBreeze = {
            EntityQuery: jasmine.createSpy().and.returnValue(mockQuery)
        };

        mockEm = {
            createEntity: jasmine.createSpy()
        };

        mockEmFactory = {
            getSharedManager: jasmine.createSpy().and.returnValue(mockEm)
        };

        $provide.value('breeze', mockBreeze);
        $provide.value('entityManagerFactory', mockEmFactory);
    }));

    beforeEach(inject(function($injector) {
        service = $injector.get('DataContext');
    }));

    describe('Instantiation', function() {
        it('should request a reference to the shared ' +
            'entity manager', function() {
            expect(mockEmFactory.getSharedManager).toHaveBeenCalled();
        });
    });

    describe('Initialization', function() {
        it('should expose an initialization method', function() {
            expect(service.initialize).toBeDefined();
            expect(typeof service.initialize).toBe('function');
        });

        it('should only allow the init method to run once', function() {
            var initFn;

            initFn = function() {
                service.initialize();
            };

            expect(initFn).not.toThrow();
            expect(initFn).toThrow();
        });
    });

    describe('API', function() {
        describe('creating a query', function() {
            it('should expose a method for creating a new ' +
                'EntityQuery', function() {
                expect(typeof service.createQuery).toBe('function');
            });

            it('should return a new EntityQuery', function() {
                var query = service.createQuery();

                expect(mockBreeze.EntityQuery).toHaveBeenCalled();
                expect(query).toEqual(mockQuery);
            });
        });

        describe('creating a preset', function() {
            it('should expose a method for creating a preset', function() {
                expect(typeof service.createPreset).toBe('function');
            });

            it('should create a new preset entity', function() {
                service.createPreset();

                expect(mockEm.createEntity).toHaveBeenCalledWith('Preset');
            });
        });

        describe('creating a category', function() {
            it('should expose a method for creating a category', function() {
                expect(typeof service.createCategory).toBe('function');
            });

            it('should create a new category entity', function() {
                service.createCategory();

                expect(mockEm.createEntity).toHaveBeenCalledWith('Category');
            });
        });
    });

});