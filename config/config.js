require('dotenv').config();

module.exports = {
    app : {
        port : process.env.APP_PORT || 3000,
        mode : process.env.APP_MODE || 'prod'
    },
    db : {
        host     : process.env.DB_HOST     || 'localhost',
        port     : process.env.DB_PORT     || '27017',
        database : process.env.DB_DATABASE || 'firstmongodb',
        username : process.env.DB_USERNAME || 'root',
        password : process.env.DB_PASSWORD || 'root'
    }
}
