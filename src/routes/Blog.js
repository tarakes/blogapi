const express = require('express');
const bloghandler = express.Router();
const Blog = require('../controllers/Blog');
const UserMiddlewear = require('../middlewear/User');
const BlogMiddlewear = require('../middlewear/Blog');

bloghandler.post("/create", UserMiddlewear.validate, BlogMiddlewear.create, Blog.create);
bloghandler.get("/",Blog.getAllBlog);

module.exports = bloghandler;
