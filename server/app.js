const express = require('express')
const cockieParser = require('cookie-parser')
var cors = require('cors')
const app = express();
const userRouter = require('./routes/user.route');
const productRouter = require('./routes/product.route')

const PORT = process.env.PORT || 5000;

app.use(cockieParser());
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/product', productRouter);

app.use('/uploads', express.static('uploads'));

app.listen(PORT, () =>
    console.log(`server is listening at port ${PORT}`)
)






