const decrypt = require('../utils/decryptToken');
const logger = require('../config/errorLogger');
module.exports = {
    async login(req, res, next) {
        const { email, password } = req.body;
        if (!email) {
            res.status(400).json({ error: "email not provided", field: 'email' });
            return;
        }
        if (!password) {
            res.status(400).json({ error: "password not provided", field: 'password' });
            return;
        }
        next();
    },
    async signup(req, res, next) {
        const { name, email, password } = req.body;
        if (!name) {
            res.status(400).json({ error: "name not provided", field: 'name' });
            return;
        }
        if (!email) {
            res.status(400).json({ error: "email not provided", field: 'email' });
            return;
        }
        if (!password) {
            res.status(400).json({ error: "password not provided", field: 'password' });
            return;
        }
        next();
    },
    async validate(req, res, next) {
        try {
            const decode = decrypt(req);
            if (!decode) {
                res.status(401).json({ error: "unauthorize" });
                return;
            }
            next();
        } catch (error) {
            logger.error(error.message);
            res.status(error.status || 500).json({ error: error.message })
        }
    }
}