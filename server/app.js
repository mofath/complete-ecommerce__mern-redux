const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cockieParser = require('cookie-parser');

// routes import
const userRouter = require('./routes/user.route');
const productRouter = require('./routes/product.route');
const categoryRouter = require('./routes/category.route');
const userCartRoute = require('./routes/cart.route');
const authRoute = require('./routes/auth.route');
const orderRoute = require('./routes/order.route');
const reviewRoute = require('./routes/reviews.route');
const uploadRoute = require('./routes/upload.route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cockieParser());

// handle cors 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests
app.use('/cart', userCartRoute);
app.use('/product', productRouter);
app.use('/user/auth', authRoute);
app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/order', orderRoute);
app.use('/reviews', reviewRoute);
app.use('/uploads', uploadRoute);

// override 404 error
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

// catch Error
app.use((error, req, res, next) => {
    console.log('\x1b[33m%s\x1b[0m', "...ERROR CAUGHT...");
    res.status(error.status || 500);
    res.json({ message: { msgBody: error.message, msgError: true } });
});

module.exports = app;
