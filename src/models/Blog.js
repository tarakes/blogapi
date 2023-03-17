const mongoose = require('mongoose');
const blog = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    created: {
        type: Date,
        default: Date.now
    }
})
const Blog = new mongoose.model("blog", blog);
module.exports = Blog;