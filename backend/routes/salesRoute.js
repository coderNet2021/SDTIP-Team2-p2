const express = require("express");
const router = express.Router();

const CategoryController = require("./../Controller/CategoryController");


router.route('/allCategories').get(CategoryController.getAllCategories);

module.exports = router;
