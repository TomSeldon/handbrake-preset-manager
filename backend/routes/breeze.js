'use strict';

/**
 * @type {{init: configureRoutes}}
 */
module.exports = {
    init: configureRoutes
};

function configureRoutes(app) {
    var repository = require('../lib/repository');

    app.get('/breeze/hpm/Lookups', getLookups);
    app.get('/breeze/hpm/Metadata', getMetadata);
    app.post('/breeze/hpm/SaveChanges', saveChanges);
    app.get('/breeze/hpm/:resource', getQuery);

    /**
     * @param {*} req
     * @param {*} res
     * @param {Function} next
     */
    function getLookups(req, res, next) {
        repository.getLookups(makeResponseHandler(res, next));
    }

    /**
     * API endpoint for retrieving metadata.
     * Although present, this just returns a 404
     * error as the metadata should be defined by
     * the client.
     *
     * @param {*} req
     * @param {*} res
     * @param {Function} next
     */
    function getMetadata(req, res, next) {
        var metadata = require('../metadata');

        makeResponseHandler(res, next)(null, metadata);
    }

    /**
     * A generic approach to handling a Breeze client query.
     *
     * @param {*} req
     * @param {*} res
     * @param {Function} next
     */
    function getQuery(req, res, next) {
        var resourceName = req.params.resource.toLowerCase(),
            query = repository.queries['get' + resourceName];

        if (!!query) {
            query(req.query, makeResponseHandler(res, next));
        } else {
            next({
                statusCode: 404,
                message: 'Unable to locate query for ' + resourceName
            });
        }
    }

    /**
     * Factory for returning a function that handles
     * the response from a Breeze Mongo query or save
     * operation.
     *
     * @param {*} res
     * @param {*} next
     * @return {Function}
     */
    function makeResponseHandler(res, next) {
        return function(err, results) {
            if (err) {
                next(err);
            } else {
                // Prevent browser from caching results of API data requests
                res.setHeader(
                    'Cache-Control',
                    'no-cache, private, no-store, must-revalidate, ' +
                        'max-stale=0, post-check=0, pre-check=0'
                );

                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(results));
            }
        }
    }

    /**
     * @param {*} req
     * @param {*} res
     * @param {Function} next
     */
    function saveChanges(req, res, next) {
        var saveResponseHandler = makeResponseHandler(res, next);

        repository.saveChanges(req.body, saveResponseHandler);
    }
}
