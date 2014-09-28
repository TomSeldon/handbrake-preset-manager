'use strict';

goog.require('hpm.entityQuery.module');

describe('EntityQueryFactory', function() {
    var eqFactory,
        breeze;

    beforeEach(module(hpm.entityQuery.module.name));

    beforeEach(inject(function($injector) {
        eqFactory = $injector.get('EntityQueryFactory');
        breeze = $injector.get('breeze');
    }));

    it('should be able to return a query constructor', function() {
        expect(eqFactory.createQuery()).toEqual(breeze.EntityQuery);
    });
});
