const Blog = require('../models/Blog');
const logger = require('../config/errorLogger');
module.exports = {
  async create(userid, body) {
    try {
      const blog = new Blog({
        title: body.title,
        content: body.content,
        author: userid.userid
      });

      await blog.save();
    } catch (error) {
      logger.debug(error);

      if (error.name === 'ValidationError' && error.kind === 'ObjectId') {
        const CustomError = new Error("author doesn't exist");
        CustomError.status = 400;
        throw CustomError;
      }
      else
        throw new Error("server error");
    }
  },
  async getAllBlog(){
    try {
      //populate the author field with only name field to hide author other details
      const blogs=await Blog.find().populate('author','name');
      return blogs;
    } catch (error) {
      logger.debug(error);
      throw new Error("server error");
    }
  }
}