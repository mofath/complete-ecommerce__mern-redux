const DBManager = require('../utils/DBManage')
const { ProductModel } = require("../models/product.model");

const { serverErrMsg } = require('../utils/data')

const productController = {

    getAllProducts: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...GET ALL PRODUCTS...");

        DBManager.CONNECT();
        try {
            const products = await ProductModel.find({}).select('name price stock createdAt gender category images').lean();
            DBManager.DISCONNECT();
            return res.status(200).json({ message: { msgBody: 'Products fetched successfully', msgError: false }, products })
        } 
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },

    getProductById: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...GET PRODUCT BY ID...");

        let productId = req.params.id

        DBManager.CONNECT();
        try {
            const product = await ProductModel.findById({ _id: productId })
                .select('name price details cumulativeRating stock createdAt gender category images').lean();
            if (product) {
                DBManager.DISCONNECT();
                return res.status(200).json({ message: { msgBody: 'Product fetched successfully', msgError: false }, product });
            } else {
                DBManager.DISCONNECT();
                return res.status(404).json({ message: { msgBody: 'Product not found', msgError: true } });
            }
        } catch (error) {
            DBManager.DISCONNECT();
            console.error(error.message);
            return res.status(500).json({ message: { msgBody: 'Something went wrong', msgError: true, error } });
        }
    },


    deleteProductBtId: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...DELETE PRODUCT REQUEST...");

        DBManager.CONNECT();
        try {
            const product = await ProductModel.findByIdAndDelete(req.params.id)
            if (product) {
                DBManager.DISCONNECT();
                return res.status(200).json({ message: { msgBody: 'Product Deleted successfully', msgError: false } })
            } else {
                DBManager.DISCONNECT();
                return res.status(404).json({ message: { msgBody: 'Can not find product', msgError: true } })
            }
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },


    addNewProduct: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...ADD NEW PRODUCT...");
        DBManager.CONNECT();

        const { writer, name, details, images, category, gender, stock, price } = req.body
        const newProduct = new ProductModel({ writer, name, details, images, category, gender, stock, price })

        try {
            const newAddedProduct = await newProduct.save();
            return res.status(201).json({ message: { msgBody: 'Product saved succesfully', msgError: false }, newAddedProduct })
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },


    filterProducts: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...FILTERED PRODUCT REQUEST...");

        let order = req.body.order ? req.body.order : "desc";
        let sortBy = req.body.sortBy ? req.body.sortBy : "price";
        let limit = req.body.limit ? parseInt(req.body.limit) : 100;
        let skip = parseInt(req.body.skip);
        let searchTerm = req.body.searchTerm;

        let findArgs = {};
        let products = []

        for (let key in req.body.filters) {
            if (req.body.filters[key].length > 0) {
                findArgs[key] = (key === "price") ?
                    { $gte: req.body.filters[key][0], $lte: req.body.filters[key][1] } : req.body.filters[key];
            }
        }

        DBManager.CONNECT();
        try {
            products = searchTerm ?
                await ProductModel.find(findArgs).find({ $text: { $search: searchTerm } })
                    .sort([[sortBy, order]]).skip(skip).limit(limit)
                    .select('name price stock createdAt gender category images').lean()
                :
                await ProductModel.find(findArgs)
                    .sort([[sortBy, order]]).skip(skip).limit(limit)
                    .select('name price stock createdAt gender category images')
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
        return res.status(200).json({ message: { msgBody: 'success', msgError: false }, products, postSize: products.length })
    },


    getProductsPriceRange: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...GET PRICE RANGE...");

        DBManager.CONNECT();
        try {
            const min = await ProductModel.findOne({}, { price: 1, _id: 0 }).sort({ price: +1 }).limit(1)
            const max = await ProductModel.findOne({}, { price: 1, _id: 0 }).sort({ price: -1 }).limit(1)
            const priceRange = [min.price, max.price]
            DBManager.DISCONNECT();
            return res.status(200).json({ message: { msgBody: 'Success', msgError: false, priceRange } })
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    }
};



module.exports = productController;
