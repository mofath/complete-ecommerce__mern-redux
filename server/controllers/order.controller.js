
const DBManager = require('../utils/DBManage')
const { OrderModel } = require("../models/order.model");
const { UserModel } = require('../models/user.model')
const { ProductModel } = require("../models/product.model");


const orderController = {
    newOrderTransaction: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...PLACE NEW ORDER...");

        let newOrder = {
            orderItems: [],
            user: {},
            dateOfPurchase: null,
            total: 0,
        }

        const { cart, transactionData } = req.body.orderData;

        newOrder = { ...newOrder, dateOfPurchase: Date.now(), totalPrice: cart.total }
        // put userInfo into payment collection
        newOrder.user = { ...req.userInfo }
        // put transaction data that comes from paypal into payment collection
        newOrder.transactionData = { ...transactionData };
        // put cart/produts info bought into payment collection
        cart.items.forEach((item) => {
            newOrder.orderItems.push({
                product: item.product._id,
                quantity: item.quantity,
            })
        })

        DBManager.CONNECT();
        try {

            //empty user cart
            await UserModel.updateOne(
                { _id: req.userInfo.id },
                { $set: { cart: [] } },
                { new: true },
            ).lean();

            //save the payment
            await OrderModel(newOrder).save();

            //increase the amount of number for the sold information
            cart.items.forEach(async (item) => {
                await ProductModel.updateOne(
                    { _id: item.id },
                    { $inc: { 'sold': item.quantity } },
                    { new: false }
                ).lean();
            })

            return res.status(200).json({ message: { msgBody: 'Your payment is approved ', msgError: false } })

        } catch (error) {
            DBManager.DISCONNECT();
            console.error('\x1b[31m%s\x1b[0m', error.message);
            return res.status(500).json({ message: { msgBody: 'Something went wrong', msgError: true } })
        }
    },


    getOrdersByUserId: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...GET ORDERS BY USER ID...");

        DBManager.CONNECT();
        try {
            const orders = await OrderModel.find({ "user.id": req.userInfo.id }).populate('orderItems.item')
            return res.status(200).json({ message: { msgBody: "User orders fetched successfuly", msgError: false }, orders })
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ message: { msgBody: "Something went wrong", msgError: true } })
        }
    },

    getOrderById: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...GET ORDER BY ID...");

        let id = req.params.id

        DBManager.CONNECT();
        try {
            const order = await OrderModel.findById({ _id: id }, 'orderItems totalPrice').populate('orderItems.product')
            return res.status(200).json({ message: { msgBody: 'Order fetched successfully', msgError: false }, order });
        } catch (error) {
            DBManager.DISCONNECT();
            console.error(error.message);
            return res.status(500).json({ message: { msgBody: 'Something went wrong', msgError: true, error } });
        }
    },
};


module.exports = orderController;





