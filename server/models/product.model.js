const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
    {
        writer: { type: Schema.Types.ObjectId, ref: 'User' },
        name: { type: String, maxlength: 50 },
        details: { type: String },
        category: { type: String, },
        gender: { type: String, },
        stock: { type: Number, default: 0 },
        price: { type: Number, default: 0 },
        images: { type: Array, default: [] },
        sold: { type: Number, maxlength: 100, default: 0 },
        cumulativeRating: { type: Number, default: 0, },
        reviews:
            [{
                user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
                username: { type: String },
                email: { email: String },
                date: { type: Date },
                rating: { type: Number },
                reviewText: { type: String },
            }],
        views: { type: Number, default: 0 }
    },
    { timestamps: true }
)


const ProductModel = mongoose.model('Product', productSchema);

module.exports = { ProductModel }