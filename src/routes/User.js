const express = require('express');
const userhandler = express.Router();
const User = require('../controllers/User');
const UserMiddlewear = require('../middlewear/User');

userhandler.post("/login", UserMiddlewear.login, User.login);
userhandler.post("/signup", UserMiddlewear.signup, User.signup);

module.exports = userhandler;