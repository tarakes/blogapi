const Blog = require('../services/Blog');
const decrypt = require('../utils/decryptToken');
module.exports = {

    async create(req, res) {
        try {
            const userid = decrypt(req);
            await Blog.create(userid, req.body);
            res.status(201).json({ "message": "post created" });
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message });
        }
    },
    async getAllBlog(req,res){
        try {
            const blogs=await Blog.getAllBlog();
            res.json({"blogs":blogs});
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message });
        }
    }
}