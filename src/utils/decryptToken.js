const jwt = require('jsonwebtoken');
const config = require('../config/config');
const logger = require('../config/errorLogger');
module.exports = function decrypt(req) {
    try {
        var token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, config.key);
        return decoded;
    } catch (error) {
        logger.debug(error);
        const CustomError = new Error('not authorize');
        CustomError.status = 401;
        throw CustomError;
    }
}