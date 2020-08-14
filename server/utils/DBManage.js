const mongoose = require('mongoose')
const config = require('../config')

const DB_URL = config.DB_URL

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

const DBManager = {
    CONNECT: async () => {
        try {
            const connection = await mongoose.connect(DB_URL, options)
            if (connection) {
                console.log('succcessfully connected to mongodb')
                return connection;
            }
        } catch (error) {
            console.log(`DB Connection Error: ${error.message}`)
        }
    },
    DISCONNECT: async () => {
        try {
            return await mongoose.disconnect();
        } catch (error) {
            console.log(`DB disconnection Error: ${error.message}`)
        }
    },
};

module.exports = DBManager;
