const router = require('express').Router();
const mongoose = require('mongoose')

const validateRrgister = require('../utils/register_validator')
const auth = require('../controllers/auth.controller');
const User = require('../models/user.model');
const Payment = require('../models/payment.model');
const Product = require('../models/product.model');

const DB_URL = 'mongodb://localhost:27017/online-shop'


router.post('/signup', validateRrgister, auth.signUp);

router.post('/login', auth.login);


router.get('/', async (req, res) => {
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(() => console.log('succcessfully connected to mongodb'))
        .catch(err => console.log(`DB Connection Error: ${err.message}`));

    const users = await User.find({});
    try {
        console.log(users);
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});


router.delete('/:id', async (req, res) => {
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('succcessfully connected to mongodb'))
    .catch(err => console.log(`DB Connection Error: ${err.message}`));

    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (user) {
            return res.status(200).send("user deleted successfully")
        } else {
            return res.status(404).send("No such user");
        }
    } catch (err) {
        res.status(500).send(err)
    }
})


router.patch('/user/:id', async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body)
        await User.save()
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})




router.post("/add_to_cart", (req, res) => {
    User.find({ _id: req.user._id }, (err, userInfo) => {

        let duplicate = false;

        userInfo.cart.forEach((cartInfo) => {
            if (cartInfo.id == req.query.productId) {
                duplicate = true
            }

            if (duplicate) {
                User.findByIdAndUpdate({ _id: req.use._id })
            }
        })
    })
})

router.get('/addToCart', (req, res) => {

    User.findOne({ _id: req.user._id }, (err, userInfo) => {
        let duplicate = false;

        console.log(userInfo)

        userInfo.cart.forEach((item) => {
            if (item.id == req.query.productId) {
                duplicate = true;
            }
        })


        if (duplicate) {
            User.findOneAndUpdate(
                { _id: req.user._id, "cart.id": req.query.productId },
                { $inc: { "cart.$.quantity": 1 } },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.cart)
                }
            )
        } else {
            User.findOneAndUpdate(
                { _id: req.user._id },
                {
                    $push: {
                        cart: {
                            id: req.query.productId,
                            quantity: 1,
                            date: Date.now()
                        }
                    }
                },
                { new: true },
                (err, userInfo) => {
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.cart)
                }
            )
        }
    })
});


router.get('/removeFromCart', (req, res) => {

    User.findOneAndUpdate(
        { _id: req.user._id },
        {
            "$pull":
                { "cart": { "id": req.query._id } }
        },
        { new: true },
        (err, userInfo) => {
            let cart = userInfo.cart;
            let array = cart.map(item => {
                return item.id
            })

            Product.find({ '_id': { $in: array } })
                .populate('writer')
                .exec((err, cartDetail) => {
                    return res.status(200).json({
                        cartDetail,
                        cart
                    })
                })
        }
    )
})



router.get('/userCartInfo', (req, res) => {
    User.findOne(
        { _id: req.user._id },
        (err, userInfo) => {
            let cart = userInfo.cart;
            let array = cart.map(item => {
                return item.id
            })


            Product.find({ '_id': { $in: array } })
                .populate('writer')
                .exec((err, cartDetail) => {
                    if (err) return res.status(400).send(err);
                    return res.status(200).json({ success: true, cartDetail, cart })
                })

        }
    )
})


// router.post('/successBuy', async function (req, res)  {
//     let history = [];
//     let transactionData = {}

//     //put payment info into user document
//     req.body.cartInfo.forEach((item) => {
//         history.push({
//             dateOfPurchase: Date.now(),
//             name: item.title,
//             item: item_id,
//             price: item.price,
//             quantity: item.quantity,
//             paymentId: req.body.paymentData.paymentId,
//         })
//     })

//     //put payment info that come from paypal into paypal collection
//     transactionData.user = {
//         id: req.user._id,
//         username: req.user.username,
//         email: req.user.email,
//     }

//     transactionData.data = req.body.paymentData;
//     transactionData.product = history;

//     try {
//         const user = await User.findOneAndUpdate(
//             { _id: req.user._id },
//             { $push: { history: history } },
//             { $set: { cart: [] } },
//             { new: true }
//         )
//         if (user) {
//             const newPayment = new Payment(transactionData)
//             const payment = await newPayment.save();
//             if (payment) {
//                 //increase the amount of number for the sold information
//                 payment.product.forEach(item => {
//                     const product = await Product.findOneAndUpdate(
//                         { _id: item._id },
//                         { $push: { history: history } },
//                         { $inc: { 'sold': item.quantity } },
//                         { new: false }
//                     )
//                     res.status(200).json({
//                         success: true,
//                         cart: user.cart,
//                         cartDetail: []
//                     });
//                 })
//             }
//         }
//     } catch (error) {
//         return res.json({ success: false }, { err: error.message });
//     }
// })








module.exports = router;