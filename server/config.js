const config = {
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/online-shop',
    JWT_SECRET: process.env.JWT_SECRET || 'goldenshop'

}

module.exports = config;
