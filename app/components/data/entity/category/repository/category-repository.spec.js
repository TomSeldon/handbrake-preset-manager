'use strict';

goog.require('hpm.category.module');

describe('CategoryRepository', function() {
    var repository;

    beforeEach(module(hpm.category.module.name));

    beforeEach(inject(function($injector) {
        repository = $injector.get('CategoryRepository');
    }));

    it('should be able to create a new category', function() {
        expect(repository.createCategory().entityType.shortName)
            .toEqual('Category');
    });

    it('should be able to return all categories');

    it('should be able to search for categories');

    it('should be able to search for and return a category by it\'s ID');
});
