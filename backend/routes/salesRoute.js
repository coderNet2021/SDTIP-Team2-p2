const express = require("express");
const router = express.Router();

const CategoryController = require("./../Controller/CategoryController");
const ProductGroupController= require("./../Controller/ProductGroupController");


router.route('/allCategories').get(CategoryController.getAllCategories);

router.route('/allProductGroup').get(ProductGroupController.getAllProductGroups);

module.exports = router;
