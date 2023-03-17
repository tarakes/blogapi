const mongoose = require('mongoose');
const user = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})
const User = new mongoose.model("user", user);
module.exports = User;