'use strict';

/**
 * @type {errorHandler}
 */
module.exports = errorHandler;

/**
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function errorHandler(err, req, res, next)
{
    if (err) {
        var body = err.message ? {message: err.message} : err,
            statusCode = err.statusCode || 500;

        if (err.saveResult) {
            body.saveResult = err.saveResult;
        }

        res
            .status(statusCode)
            .send(body);
    }
}
