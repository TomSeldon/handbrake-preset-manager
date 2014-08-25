'use strict';

/**
 * @fileoverview
 * Externs for BreezeJS
 */

var breeze = {
    NamingConvention: {
        camelCase: {}
    }
};

/**
 */
breeze.NamingConvention.camelCase.setAsDefault = function() {};

/**
 * @constructor
 */
breeze.EntityQuery = function() {};

/**
 * @param {string} type
 */
breeze.EntityQuery.prototype.from = function(type) {};

/**
 * @param {string|Object} options
 * @constructor
 */
breeze.EntityManager = function(options) {};

/**
 * @param {breeze.EntityQuery} query
 */
breeze.EntityManager.prototype.executeQuery = function(query) {};

/**
 * @param {{serviceName: string}} options
 * @constructor
 */
breeze.DataService = function(options) {};

/**
 * @constructor
 */
breeze.MetadataStore = function() {};

/**
 * @param {Object} metadata
 */
breeze.MetadataStore.prototype.importMetadata = function(metadata) {};

/**
 * @param {breeze.DataService} dataService
 */
breeze.MetadataStore.prototype.addDataService = function(dataService) {};

/**
 * @param {string} serviceName
 */
breeze.MetadataStore.prototype.hasMetadataFor = function(serviceName) {};
