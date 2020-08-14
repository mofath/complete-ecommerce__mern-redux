const { UserModel } = require('../models/user.model')
const { jwtToken, comparePassword } = require('../utils/utils');

const DBManager = require('../utils/DBManage')

const authController = {
    signUp: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...SIGNUP REQUEST...");

        const { username, email, password } = req.body;

        DBManager.CONNECT();
        try {
            const existingEmail = await UserModel.findOne({ email }).lean();
            if (existingEmail) {
                DBManager.DISCONNECT();
                return res.statuns(403).json({ message: { msgBody: 'Email is already taken', msgError: true } })
            } else {
                const newUser = new UserModel({ username, email: email.toLowerCase(), password })
                await newUser.save();

                DBManager.DISCONNECT();
                return res.status(201).send({ message: { msgBody: 'Account successfully created', msgError: false } });
            }
        } catch (error) {
            DBManager.DISCONNECT();
            console.error(error);
            return res.status(500).json({ message: { msgBody: "Something went wrong", msgError: true } })
        }
    },



    login: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...LOGIN REQUEST...");

        DBManager.CONNECT();
        try {
            const { email, password } = req.body;
            const user = await UserModel.findOne({ email });
            if (user) {
                DBManager.DISCONNECT();
                if (comparePassword(password, user.password)) {
                    const { password, ...rest } = user._doc
                    const token = jwtToken.createToken({ userId: user._id, email: user.email, role: user.role, username: user.username });

                    res.cookie('access_token', token, { httpOnly: true, sameSite: true });
                    return res.status(201).json({
                        message: { msgBody: `Welcome, ${user.username}`, msgError: false },
                        isAuthenticated: true, userInfo: rest
                    });
                } else {
                    DBManager.DISCONNECT();
                    return res.status(401).json({
                        message: { msgBody: 'Invalid password', msgError: true },
                        isAuthenticated: false,
                    })
                }
            } else {
                DBManager.DISCONNECT();
                return res.status(401).json({
                    message: { msgBody: 'Invalid email', msgError: true },
                    isAuthenticated: false,
                })
            }
        } catch (error) {
            DBManager.DISCONNECT();
            console.error(error);
            return res.status(500).json({ message: { msgBody: "Something went wrong", msgError: true, error } })
        }
    },


    requireAuth: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...AUTH REQUEST...");

        let token = req.cookies["access_token"];

        if (!token) {
            return res.status(401).json({ message: { msgBody: 'No token, authorization denied', msgError: true } });
        }
        else {
            try {
                decodedToken = await jwtToken.verifyToken(token);
            } catch (error) {
                return res.status(404).json({ message: { msgBody: 'Token expired or not valid', msgError: true } });
            }
        }
        if (decodedToken) {
            req.userInfo = { id: decodedToken.sub, email: decodedToken.email, username: decodedToken.username, role: decodedToken.role }
            next();
        }
        else return res.status(401).json({ message: { msgBody: 'Invalid token', msgError: true } });
    },

    requireAdmin: (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...REQUIRE ADMIN...");

        if (req.userInfo.role === 'admin') next();
        return res.status(401).json({ message: { msgBody: 'Not authorized', msgError: true } });
    },


    
    logout: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...LOGOUT REQUEST...");
        
        res.clearCookie('access_token');
        return res.status(200).json({ message: { msgBody: 'Logout successfully', msgError: false } });
    },



};

module.exports = authController;
