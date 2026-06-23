const express = require('express');
const { getAllProducts } = require('../controllers/productController');
const router = express.Router();

router.get("/all-products", getAllProducts);

module.exports = router;