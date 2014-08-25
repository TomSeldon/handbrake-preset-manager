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

        logToConsole(err, statusCode, body);

        res.status(statusCode).send(body);
    }
}

function logToConsole(err, status, body) {
    var stack = [];

    stack.push('Status: ' + status);

    if (typeof body === 'string') {
        stack.push(body);
    } else {
        stack.push(JSON.stringify(body));
    }

    while (err) {
        stack = err.stack || '';
        err = err.innerError;

        if (err && err.message) {
            stack.push(err.message);
        }
    }

    stack.forEach(console.log);
}
