const express = require('express');
const { getAllProducts, getAllBrands, getAllCategories } = require('../controllers/productController');
const router = express.Router();

router.get("/all-products", getAllProducts);
router.get("/all-btands", getAllBrands);
router.get("/all-categories", getAllCategories);

module.exports = router;