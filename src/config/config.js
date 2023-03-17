require('dotenv').config()

module.exports={
    db:process.env.DATEBASE_URL,
    key:process.env.ACCESS_TOKEN_KEY
}