require("dotenv").config()
const connectDB = require("../config/db")
const Category = require("../models/categoryModel")
const categoryData = require("../data/categoryData")

console.log("Entering seeder script")

// establish database conn
connectDB();

const importData = async () => {
    try {
        await Category.insertMany(productsData)
        console.log("Data is imported successfully into Categories")
        process.exit()
    } catch (error) {
        console.error("Error with category data import")
        process.exit(1)
    }
} 

importData();
