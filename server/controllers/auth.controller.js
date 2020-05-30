const User = require('../models/user.model')
const mongoose = require('mongoose')
const { jwtToken, comparePassword } = require('../utils/utils');

const DB_URL = 'mongodb://localhost:27017/online-shop'

const auth = {

    async signUp(req, res, next) {
        mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('succcessfully connected to mongodb'))
            .catch(err => console.log(`DB Connection Error: ${err.message}`));
        const { username, email, password, role } = req.body;
        try {
            const user = await User.findOne({ email })
            if (user) {
                mongoose.disconnect();
                return res.status(400).json({ message: { msgBody: 'Email is already taken', msgErroe: true } })
            } else {
                const newUser = new User({ username, email, password, role })
                const user = await newUser.save();
                if (user) {
                    console.log(user);
                    mongoose.disconnect();
                    return res.status(201).send({ message: { msgBody: 'Account successfully created', msgErroe: false } });
                } else {
                    mongoose.disconnect();
                    res.status(500).json({ message: { msgBody: "Error savin user to database", msgError: true } })
                }
            }
        } catch (e) {
            mongoose.disconnect();
            console.log(e);
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } })
        }
    },



    async login(req, res, next) {
        console.log('sign in');
        
        mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('succcessfully connected to mongodb'))
            .catch(err => console.log(`DB Connection Error: ${err.message}`));

        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (user) {    
                mongoose.disconnect();            
                if (comparePassword(password, user.password)) {
                    const { _id, username } = user;
                    const token = jwtToken.createToken(_id);
                    res.cookie('access_token', token, { httpOnly: false, sameSite: true });
                    return res.status(200).json({ isAuthenticated: true, user: { _id, username } });
                } else {
                    mongoose.disconnect();
                    return res.status(400).json({ message: { msgBody: 'invalid password', msgErroe: false } })
                }
            } else {
                mongoose.disconnect();
                return res.status(400).json({ message: { msgBody: 'invalid email', msgErroe: false } })
            }
        } catch (e) {
            mongoose.disconnect();
            return next(new Error(e));
        }
    },
};

module.exports = auth;
