module.exports = {
    async create(req, res, next) {
        if (!req.body.title) {
            res.status(400).json({ error: "title not provided", field: 'title' });
            return;
        }
        if (!req.body.content) {
            res.status(400).json({ error: "content not provided", field: 'content' });
            return;
        }
        next();
    }
}