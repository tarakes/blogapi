const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');
const userhandler = require('./routes/User');
const bloghandler = require('./routes/Blog');


app.use(express.json());
app.use(cors());


mongoose.set('strictQuery', true);
mongoose
    .connect(config.db)
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log(err)
    })


app.use((req, res, next) => {
    if (req.headers['content-type'] && req.headers['content-type'] !== 'application/json') {
        res.status(400).send({ error: 'Content-Type must be application/json' });
    } else {
        next();
    }
})
app.use("/user", userhandler);
app.use('/blog', bloghandler);


app.listen(4000, () => {
    console.log('server listening on port 4000');
})
