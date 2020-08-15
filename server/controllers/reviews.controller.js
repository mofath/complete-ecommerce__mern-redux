const DBManager = require('../utils/DBManage');

const { ProductModel } = require("../models/product.model");
const { serverErrMsg } = require('../utils/data');


const reviewsController = {

    getProductReviews: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...GET PRODUCT REVIEWS...");

        let productId = req.params.productId;

        DBManager.CONNECT();
        try {
            const reviews = await ProductModel.findById({ _id: productId })
                // .sort({ "reviews": { "$date": "-1" } })
                .select('reviews cumulativeRating').lean()
            return res.status(200).json({ message: { msgBody: 'Reviews fetched successfully', msgError: false }, reviews })
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },


    submitAReview: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...SUBMIT A REVIEW...");

        const { id: userId, username, email } = req.userInfo;
        const { productId, RviewText, Rating } = req.body.reviewData;

        DBManager.CONNECT();
        try {
            const product = await ProductModel.findById({ _id: productId }, { reviews: 1, cumulativeRating: 1, _id: 0 }).lean();

            const newCumulativeRating =
                !product.reviews || product.cumulativeRating === 0 ?
                    Rating : ((product.cumulativeRating * product.reviews.length) + Rating) / (product.reviews.length + 1);

            const updatedProduct = await ProductModel.findByIdAndUpdate(
                { _id: productId },
                {
                    $push: { reviews: { user: userId, username, email, rating: Rating, reviewText: RviewText, date: Date.now() } },
                    $set: { cumulativeRating: newCumulativeRating }
                },
                { new: true }
            ).select({ "reviews": { "$slice": -1 } })


            return res.status(200).json({
                message: { msgBody: 'Review added successfully', msgError: false },
                newReview: updatedProduct.reviews[0],
                cumulativeRating: newCumulativeRating
            })

        } 
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },

};


module.exports = reviewsController;