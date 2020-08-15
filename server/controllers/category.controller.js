const DBManager = require('../utils/DBManage')
const { CategoryModel } = require("../models/category.model");

const { serverErrMsg } = require('../utils/data')

const categoryController = {

    getAllCategories: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...GET ALL CATEGORIES...");
        DBManager.CONNECT();
        try {
            const categories = await CategoryModel.find({});
            if (categories) {
                DBManager.DISCONNECT();
                return res.status(200).json({ message: { msgBody: 'Categories fetched successfully', msgError: false }, categories })
            } else {
                DBManager.DISCONNECT();
                return res.status(200).json({ message: { msgBody: 'No categories found!', msgError: true } })
            }
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },


    addNewCategory: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...ADD NEW CATEGORY...");

        DBManager.CONNECT();
        const { writer, name, key, stock } = req.body

        try {
            const category = await CategoryModel.findOne({ name })
            if (category) {
                DBManager.DISCONNECT();
                return res.status(400).json({ message: { msgBody: 'Category already exist!', msgError: true } })
            } else {
                const newCategory = new Category({ writer, name, key, stock })
                const categorySaved = await newCategory.save();
                DBManager.DISCONNECT();
                return res.status(200).json({ message: { msgBody: 'Category successfully added!', msgError: false }, newAddedCategory: categorySaved })

            }
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },


    modifyCategory: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...MODIFY CATEGORY...");

        const { name } = req.body;

        DBManager.CONNECT();
        try {
            const updatedCategory = await CategoryModel.updateOne({ _id: req.params.id }, { $set: { "name": name } })
            DBManager.DISCONNECT();
            return res.status(200).json({ message: { msgBody: 'Category updated successfully.', msgError: false } })
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },


    deleteCategory: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...DELETE CATEGORY...");


        DBManager.CONNECT();
        try {
            const categoryDeleted = await CategoryModel.findByIdAndDelete(req.params.id)
            if (categoryDeleted) {
                DBManager.DISCONNECT();
                return res.status(200).json({ message: { msgBody: 'Category deleted successfully!', msgError: false } })
            } else {
                DBManager.DISCONNECT();
                return res.status(404).json({ message: { msgBody: 'Category not exist!', msgError: false } })
            }
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },

};



module.exports = categoryController;
