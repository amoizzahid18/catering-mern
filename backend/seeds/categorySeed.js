require("dotenv").config()
const connectDB = require("../config/db")
const Category = require("../models/categoryModel")
const categoryData = require("../data/categoryData")

console.log("Entering seeder script")

// establish database conn
connectDB();

const importData = async () => {
    try {
        await Category.deleteMany()
        .then(() => {console.log("Category data deleted successfully")})
        await Category.insertMany(categoryData)
        console.log("Data is imported successfully into Categories")
        process.exit()
    } catch (error) {
        console.error("Error with category data import")
        process.exit(1)
    }
} 

importData();
