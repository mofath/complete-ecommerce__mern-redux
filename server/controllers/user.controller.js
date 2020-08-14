const { UserModel } = require('../models/user.model')
const { jwtToken } = require('../utils/utils');

const DBManager = require('../utils/DBManage')

const userController = {

    getAllUsers: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...GET ALL USERS...");
        // const page = req.page;
        // const limit = req.limit

        // const startIndex = (page - 1) * limit;
        // const endIndex = page * limit;

        DBManager.CONNECT()
        try {
            const users = await UserModel.find({});
            res.status(200).json({ message: { msgBody: "Users fetched successfully", msgError: false }, users });
        } catch (error) {
            DBManager.DISCONNECT();
            console.error(error.message);
            return res.status(500).json({ message: { msgBody: "Something went wrong", msgError: true } })
        }
    },


    findUserById: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...FIND USER BY ID...");

        const userId = req.userInfo.id;

        DBManager.CONNECT();
        try {
            const userInfo = await UserModel.findById({ _id: userId }).select('-password')
            if (userInfo) {
                DBManager.DISCONNECT();
                return res.status(200).json({
                    message: { msgBody: 'Authenticated', msgError: false },
                    userInfo,
                    isAuthenticated: true,
                })
            } else {
                DBManager.DISCONNECT();
                return res.status(404).json({ message: { msgBody: "User not found ", msgError: true } })
            }
        } catch (error) {
            DBManager.DISCONNECT();
            console.error(error.message);
            return res.status(500).json({ message: { msgBody: "Something went wrong", msgError: true } })
        }
    },

    deleteUser: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...DELETE USER...");

        DBManager.CONNECT();
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id)

            if (user) {
                res.status(200).json({ message: { msgBody: "Users deleted successfully", msgError: false } });
            } else {
                return res.status(404).json({ message: { msgBody: "User not found ", msgError: true } })
            }
        } catch (error) {
            DBManager.DISCONNECT();
            console.error(error.message);
            return res.status(500).json({ message: { msgBody: "Something went wrong", msgError: true } })
        }
    },


    modifyUser: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...MODIFY USER...");

        DBManager.CONNECT();
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id)

            if (user) {
                return res.status(200).send("user modified successfully")
            } else {
                return res.status(404).send("No such user");
            }
        } catch (error) {
            DBManager.DISCONNECT();
            console.error(error.message);
            return res.status(500).json({ message: { msgBody: "Something went wrong", msgError: true } })
        }
    },

    countUsers: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...COUNT USERS...");

        DBManager.CONNECT();
        try {
            const userCount = await UserModel.count({})
            DBManager.disconnect();
            res.status(200).json({ userCount })
        }
        catch (error) {
            DBManager.DISCONNECT();
            console.error(error.message);
            return res.status(500).json({ message: { msgBody: "Something went wrong", msgError: true } })
        }
    }
};

module.exports = userController;