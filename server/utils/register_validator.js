const validator = require('validator');
const User = require('../models/user.model')

module.exports = async (req, res, next) => {
    const {username, email, password} = req.body;
    if (!username) {
        return res.status(400).json({ message: { msgBody: 'username is required', msgErroe: true } })
    }
    if (!validator.isEmail) {
        return res.status(400).json({ message: { msgBody: 'invalid email', msgErroe: true } })
    }
    if (!email) {
        return res.status(400).json({ message: { msgBody: 'Email is required', msgErroe: true } })
    }
    if (!password) {
        return res.status(400).send({ error: 'password is required' });
    }
    next();
};

