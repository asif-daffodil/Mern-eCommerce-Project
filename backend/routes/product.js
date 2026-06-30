const express = require('express');
const { getAllProducts, getAllBrands, getAllCategories, addNewProduct, addNewBrand, addNewCategory } = require('../controllers/productController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get("/all-products", getAllProducts);
router.get("/all-btands", getAllBrands);
router.get("/all-categories", getAllCategories);
router.post("/create", upload.array("images", 10), addNewProduct);
router.post("/add-brand", upload.single("logo"), addNewBrand);
router.post("/add-category", upload.single("image"), addNewCategory);

module.exports = router;
