const express = require('express');
const { getAllProducts, getAllBrands, getAllCategories, addNewProduct, addNewBrand } = require('../controllers/productController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get("/all-products", getAllProducts);
router.get("/all-btands", getAllBrands);
router.get("/all-categories", getAllCategories);
router.post("/create", upload.array("images", 10), addNewProduct);
router.post("/add-brand", upload.single("logo"), addNewBrand);

module.exports = router;
