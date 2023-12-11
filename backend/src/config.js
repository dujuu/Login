const {config}= require('dotenv')
config()

module.exports = {
    bd: {
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        database: process.env.BD_DATABASE,
    }
}