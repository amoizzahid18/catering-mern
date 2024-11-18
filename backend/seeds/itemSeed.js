const connectDB = require("../config/db.js");
require("dotenv").config(); 
const Item = require("../models/itemModel");
const ItemData = require("../data/itemsData");


connectDB();
const importData = async () => {
    try {
        await Item.deleteMany();
        await Item.insertMany(ItemData);
        console.log("Data is imported successfully into DB");
        process.exit();
    } catch (error) {
        console.error("Error with Item data import", error);
        process.exit(1);
    }
}

importData();