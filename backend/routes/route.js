const express = require("express");
const router = express.Router();

const {getAllCategories} = require("../controllers/controller.js");


// get all caegories 
router.get("/categories", getAllCategories)

module.exports = router;
