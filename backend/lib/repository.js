'use strict';

var bmongo = require('breeze-mongodb'),
    pluralize = require('pluralize'),
    database = require('./database');

var collectionNames = [
    'Category',
    'Preset'
];

/**
 * @type {{getLookups: getLookups, saveChanges: saveChanges}}
 */
module.exports = {
    getLookups: getLookups,
    saveChanges: saveChanges,
    queries: {}
};

addQueries();

/**
 * Adds collection queries to the repository
 * in the form of `getresourcename`
 * (e.g. getpresets)
 */
function addQueries() {
    collectionNames.forEach(makeCollectionQueryFor);

    /**
     * @param {string} collectionName
     */
    function makeCollectionQueryFor(collectionName) {
        var resourceName, collectionQuery;

        resourceName = String(pluralize(collectionName)).toLowerCase();

        collectionQuery = function(queryString, next)
        {
            getDb(function(db) {
                var query = new bmongo.MongoQuery(queryString);

                query.execute(db, collectionName, next);
            }, next);
        };

        module.exports.queries['get' + resourceName] = collectionQuery;
    }
}

/**
 * Get the mongo db instance and call `callback` with that
 * database.
 *
 * @param {Function} callback
 * @param {Function} next
 */
function getDb(callback, next) {
    database.getDb(function(err, db) {
        if (err) {
            next(err);
        } else {
            try {
                callback(db);
            } catch (e) {
                err = new Error(
                    'Died in the repository; review server console'
                );
                err.stack = e.stack;
                err.innerError = e;
                next(err);
            }
        }
    });
}

/**
 * lookups query whose result is an object with
 * several sets of reference ('lookup') entities.
 *
 * @param {Function} next
 */
function getLookups(next) {
    getDb(get, next);

    function get(db) {
        var failed = false,
            lookups = {},
            queryCountdown = 0;

        collectionNames.forEach(getAll);

        function getAll(collectionName) {
            queryCountdown += 1;

            db.collection(collectionName, {strict: true}, collectionCallback);

            function collectionCallback(err, collection) {
                if (err) {
                    failed = true;

                    err = {
                        statusCode: 404,
                        message: 'Unable to find: ' + collectionName
                    };

                    next(err);
                } else {
                    if (!failed) {
                        collection.find().toArray(findCallback);
                    }
                }
            }

            function findCallback(err, results) {
                queryCountdown -= 1;

                if (!failed) {
                    if (err) {
                        next(err);
                    } else {
                        results.forEach(function(r) {
                            r.$type = collectionName;
                        });

                        lookups[collectionName] = results;

                        if (queryCountdown === 0) {
                            next(null, results);
                        }
                    }
                }
            }
        }
    }
}

/**
 * Breeze change-set save.
 *
 * @param {*} saveBundle - A json "saveBundle" from a Breeze client
 * @param {Function} next
 */
function saveChanges(saveBundle, next) {
    getDb(save, next);

    function save(db) {
        var saveProcessor = new bmongo.MongoSaveHandler(db, saveBundle, next);

        setSaveMetadata(saveProcessor.metadata);
        saveProcessor.save();
    }
}

/**
 * @param {*} saveMetadata
 */
function setSaveMetadata(saveMetadata) {
    for (var key in saveMetadata) {
        if (saveMetadata.hasOwnProperty(key)) {
            var entityType;

            entityType = saveMetadata[key];

            // entityTypes have collection names
            // presence of the defaultResourceName indicates
            // it is an entityType, not a complexType.
            if (entityType.hasOwnProperty('defaultResourceName')) {
                var name = entityType.entityTypeName,
                    len = name.indexOf(':');

                if (len > -1) {
                    entityType.collectionName = name.substr(0, len);
                } else {
                    entityType.collectionName = name;
                }
            }
        }
    }
}

