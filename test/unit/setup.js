'use strict';

goog.require('hpm.fixture.Metadata');

var breeze = window.breeze,
    metadata = hpm.fixture.Metadata,
    storeCtor,
    store;

storeCtor = function()
{
    return store;
};

beforeEach(function() {
    if (!store) {
        store = new breeze.MetadataStore();
        store.importMetadata(metadata);
    }

    breeze.MetadataStore = storeCtor;
});

describe('test setup', function() {
    it('should mock out the MetadataStore constructor for tests', function() {
        expect(new breeze.MetadataStore).toEqual(store);
        expect(new breeze.MetadataStore).toEqual(store);
        expect(new breeze.MetadataStore).toEqual(store);
    });
});
