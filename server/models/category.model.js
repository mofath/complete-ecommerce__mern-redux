const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = mongoose.Schema(
    {
        writer: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String,
            maxlength: 50
        },
        key: {
            type: Number,
            default: 1
        },
        stock: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
)


categorySchema.index(
    { name: 'text', },
    {
        weights: { name: 5, }
    }
)

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = { CategoryModel }