const Category = require("../models/categoryModel");
const Item = require("../models/itemModel");

const getAllCategories = async (req, res) => {
    try {
        const category = await Category.find({});
        res.json({})    
        res.status(200)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message,
        })
    }
}

module.exports = {
    getAllCategories,
}