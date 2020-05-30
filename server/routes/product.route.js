
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { Product } = require("../models/product.model");
const multer = require('multer');

const DB_URL = 'mongodb://localhost:27017/online-shop'


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")

router.post("/uploadImage", (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })

});


router.post("/uploadProduct", (req, res) => {
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('succcessfully connected to mongodb'))
        .catch(err => console.log(`DB Connection Error: ${err.message}`));

    const { writer, title, description, images, continents } = req.body

    const newProduct = new Product({ writer, title, description, images, continents })
    console.log(newProduct);

    newProduct.save(err => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    });
})

//?id=${productId}&type=single
router.get("/product_by_id", (req, res) => {
    let type = req.query.type
    let productIds = req.query.id 

    Product.find
})

router.post("/add_to_cart", (req, res) => {
    let type = req.query.type
    let productIds = req.query.id 

    Product.find
})

router.post("/products", (req, res) => {
    mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('succcessfully connected to mongodb'))
    .catch(err => console.log(`DB Connection Error: ${err.message}`));

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    let findArgs = {};
    let term = req.body.searchTerm;

    for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    console.log(findArgs)

    if (term) {
        Product.find(findArgs)
            .find({ $text: { $search: term } })
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    } else {
        Product.find(findArgs)
            .populate("writer")
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products, postSize: products.length })
            })
    }

});



module.exports = router;
