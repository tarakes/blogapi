const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const logger = require('../config/errorLogger');
module.exports = {
    async signup(body) {

        try {
            const password = await bcrypt.hash(body.password, 10);
            const user = new User({
                name: body.name,
                email: body.email,
                password
            });
            const newUser = await user.save();
            const token = jwt.sign({ userid: newUser._id }, config.key, { expiresIn: '48h' });
            return token;
        }
        catch (error) {
            logger.debug(error);
            if (error.name === 'MongoServerError' && error.code === 11000) {
                const CustomError = new Error("duplicate user");
                CustomError.status = 409;
                throw CustomError;
            } else
                throw new Error("server error");
        }
    },
    async login(body) {
        try {
            const doc = await User.findOne({ email: body.email });
            if (!doc) {
                const CustomError = new Error("No such user found");
                CustomError.status = 404;
                throw CustomError;

            }
            const result = await bcrypt.compare(body.password, doc.password);
            if (!result) {
                const CustomError = new Error("Wrong password");
                CustomError.status = 401;
                throw CustomError;

            }
            const token = jwt.sign({ userid: doc._id }, config.key, { expiresIn: '48h' });
            return token;
        } catch (error) {
            logger.debug(error);
            throw error;
        }
    }
}
