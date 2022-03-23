/**
 * Logs each HTTP request to the server console to assist with debugging.
 * @param {*} req Express request.
 * @param {*} res Express response.
 * @param {*} next Express next.
 * @returns {String} Console.log of [URL]: [HTTP Request] - [Time of Request].
 */
 const logger = function(req, res, next){
    console.log(`${req.url}: ${req.method} - ${new Date().toLocaleTimeString()}`);
    next();
}

module.exports = logger;