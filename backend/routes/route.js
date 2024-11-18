const express = require("express");
const router = express.Router();

const {getAllCategories, 
    getAllItems,
    } = require("../controllers/controller.js");


// get all caegories 
router.get("/categories", getAllCategories)

//get all Items
router.get("/items", getAllItems)

module.exports = router;
