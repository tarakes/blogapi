
const User = require('../services/User');
module.exports = {
    async signup(req, res) {
        try {
            const token = await User.signup(req.body);
            res.status(201).json({ "token": token, "message": "user created" });
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message });
        }
    },
    async login(req, res) {
        try {
            const token = await User.login(req.body);
            res.status(200).json({ "token": token, "message": "logged in successfully" });
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message });
        }
    }
}