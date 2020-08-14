const DBManager = require('../utils/DBManage')
const {UserModel} = require('../models/user.model')


const cartController = {

    getCartItems: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...GET USER CART ITEMS...");

        const userId = req.userInfo.id;

        DBManager.CONNECT();
        try {
            const user = await UserModel.findById({ _id: userId }).populate('cart.product')
            return res.status(200).json({
                message: { msgBody: "Cart items fetched successfully", msgError: false },
                cartItems: user.cart
            })
        }
        catch (error) {
            DBManager.DISCONNECT();
            console.log(error.message);
            return res.status(500).json({ message: { msgBody: "Something went wrong", msgError: true } })
        }
    },

    removeCartItem: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...Remove CART ITEM...");

        const userId = req.userInfo.id;
        const productId = req.params.productId

        DBManager.CONNECT();
        try {
            const userUpdated = await UserModel.findOneAndUpdate(
                { _id: userId },
                { "$pull": { "cart": { "product": productId } } },
                { new: true },
            ).populate('cart.product')

            return res.status(200).json({
                message: { msgBody: "Cart item removed successfully", msgError: false },
            })
        }
        catch (error) {
            DBManager.DISCONNECT();
            console.log(error.message);
            return res.status(500).json({ message: { msgBody: "Something went wrong", msgError: true } })
        }
    },


    addCartItem: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...ADD NEW CART ITEM...");

        const userId = req.userInfo.id;
        const productId = req.params.productId

        DBManager.CONNECT();
        try {
            let duplicate = false;
            let userData = await UserModel.findById({ _id: userId })

            if (userData) {
                userData.cart.forEach((cartItem) => {
                    if (cartItem.product == productId) {
                        duplicate = true
                    }
                })
            }

            let userUpdated;

            if (duplicate) {
                userUpdated = await UserModel.findOneAndUpdate(
                    { _id: userId, "cart.product": productId },
                    { $inc: { "cart.$.quantity": 1 } },
                    { new: true },
                )
                    .select({ "cart": { "$slice": -1 } })
                    .populate('cart.product', 'name price category images stock')
            }
            else {
                userUpdated = await UserModel.findByIdAndUpdate(
                    { _id: userId },
                    { $push: { cart: { product: productId, quantity: 1, addedAt: Date.now() } } },
                    { new: true }
                )
                    .select({ "cart": { "$slice": -1 } })
                    .populate('cart.product', 'name price category images stock')
            }

            const newAddedCartItem = duplicate ? null : userUpdated.cart[0]

            return res.status(200).json({
                message: { msgBody: "Item added successfully to cart", msgError: false },
                newAddedCartItem,
            })
        } catch (error) {
            DBManager.DISCONNECT();
            console.log(error.message);
            return res.status(500).json({ message: { msgBody: "Something went wrong", msgError: true } })
        }
    },
};


module.exports = cartController;