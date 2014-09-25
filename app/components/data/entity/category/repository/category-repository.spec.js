'use strict';

goog.require('hpm.category.module');

describe('CategoryRepository', function() {
    var repository, dataFacade;

    beforeEach(module(hpm.category.module.name));

    beforeEach(inject(function($injector) {
        repository = $injector.get('CategoryRepository');
        dataFacade = $injector.get('DataFacade');
    }));

    it('should be able to create a new category', function() {
        expect(repository.createCategory().entityType.shortName)
            .toEqual('Category');
    });

    it('should be able to return all categories', function() {
        var manager = dataFacade.manager_;

        spyOn(manager, 'executeQuery');

        repository.getAllCategories();

        expect(manager.executeQuery).toHaveBeenCalledWith(
            jasmine.objectContaining({resourceName: 'Categories'})
        );
    });

    it('should be able to search for categories');

    it('should be able to search for and return a category by it\'s ID');
});
