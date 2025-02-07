const Category = require("../models/categoryModel");
const Item = require("../models/itemModel");

const getAllCategories = async (req, res) => {
    try {
        const category = await Category.find({});
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message,
        })
    }
}


const getAllItems = async(req, res) => {
    try {
        const data = await Item.find({});
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message})  
    }
}

module.exports = {
    getAllCategories,
    getAllItems,
}