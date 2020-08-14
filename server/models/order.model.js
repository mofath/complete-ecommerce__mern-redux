const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        user: {
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            username: { type: String, required: true },
            email: { type: String, required: true },
        },
        transactionData: {
            type: Object,
            default: {}
        },
        orderItems: [{
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
        }],
        dateOfPurchase: { type: Date },
        totalPrice: { type: Number, required: true },
        taxPrice: { type: Number },
        shippingPrice: { type: Number },
        isPaid: { type: Boolean, default: false },
        isDelivered: { type: Boolean, default: false },
        deliveredAt: { type: Date },
    },
    {
        timestamps: true
    }
)


const OrderModel = mongoose.model('order', orderSchema);

module.exports = { OrderModel }