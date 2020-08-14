const express = require('express')

const cockieParser = require('cookie-parser')
const dotenv = require('dotenv')
const config = require('./config')
const cors = require('cors')

const app = express();
dotenv.config();

const userRouter = require('./routes/user.route');
const productRouter = require('./routes/product.route')
const categoryRouter = require('./routes/category.route')
const userCartRoute = require('./routes/cart.route')
const authRoute = require('./routes/auth.route')
const orderRoute = require('./routes/order.route')
const reviewRoute = require('./routes/reviews.route')
const uploadRoute = require('./routes/upload.route')    

const PORT = process.env.PORT || 5000;

app.use(cockieParser());
app.use(express.json());
app.use(cors());

app.use('/cart', userCartRoute);
app.use('/product', productRouter);
app.use('/user/auth', authRoute);
app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/order', orderRoute);
app.use('/reviews', reviewRoute);
app.use('/uploads', uploadRoute);

app.listen(PORT, () => console.log(`server is listening at port ${PORT}`) )
