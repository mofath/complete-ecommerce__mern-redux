const config = {
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/online-shop',
    JWT_SECRET: process.env.JWT_SECRET || 'goldenshop',
    PORT: process.env.PORT || 5000
}

module.exports = config;
