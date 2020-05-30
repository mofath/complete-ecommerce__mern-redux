const passport = require('passport');
const LocalSterategy = require('passport-local').Strategy;
const JWTSterategy = require('passport-jwt').Strategy
const User = require('./models/user.model');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/goodreads'

const cokieExtractor = (req) => {
    let token = null;
    if (req && req.cockies) {
        token = req.cockies['access_token']
    }
    return token;
}



// authorization to protect end points
passport.use(new JWTSterategy({
    jwtFromRequest: cokieExtractor,
    secretOrKey: 'goodreads',
}, (payload, done) => {
    User.findById({ _id: payload }, (err, user) => {
        if (err)
            return done(err, false)
        if (!user)
            return done(null, user)
        else
            return done(null, false)
    })
}))

//authinticated local sterategy using username and passwoed
passport.use(new LocalSterategy({ usernameField: 'email', passwordField: 'password' },
    function (email, password, done) {
        console.log(email);

        mongoose.connect(DB_URL, { useNewUrlParser: true }, () => { console.log('succcessfully connected to mongodb') })
        User.findOne({ email: email }, function (err, user) {
            
            //something went wrong with the database
            if (err) {
                console.log(err);
                mongoose.disconnect();
                return done(err)
            }

            //no user exist
            if (!user) {
                console.log('not user');
                mongoose.disconnect();
                return done(null, false)
            }

            //check if password correct
            user.comparePassword(password, done)
                .then(function (isMatch) {
                    mongoose.disconnect();
                    return isMatch === true ? user : null; // How to pass the user object to route??
                }).catch(function (err) { // handle possible errors
                    mongoose.disconnect();
                    return done(err);
                })
        });
    })
);