'use strict';

goog.require('hpm.entityManager.module');

describe('EntityManagerFactory', function() {
    var emFactory,
        breeze;

    beforeEach(module(hpm.entityManager.module.name));

    beforeEach(inject(function($injector) {
        emFactory = $injector.get('EntityManagerFactory');
        breeze = $injector.get('breeze');
    }));

    it('should be able to create new instances of entity managers', function() {
        expect(emFactory.createManager).toEqual(jasmine.any(Function));
        expect(emFactory.createManager() instanceof breeze.EntityManager)
            .toBe(true);
    });
});
