const express = require('express');
const {
    getAllProducts,
    getAllBrands,
    getAllCategories,
    addNewProduct,
    updateProduct,
    addNewBrand,
    addNewCategory,
    getProduct,
    deleteProduct
} = require('../controllers/productController');
const upload = require('../middlewares/upload');
const { isLoggedIn, isAdmin } = require('../middlewares/auth');
const router = express.Router();

router.get("/all-products", getAllProducts);
router.get("/all-brands", getAllBrands);
router.get("/all-categories", getAllCategories);
router.post("/create", isLoggedIn, isAdmin, upload.array("images", 10), addNewProduct);
router.put("/update/:id", isLoggedIn, isAdmin, upload.array("images", 10), updateProduct);
router.post("/add-brand", isLoggedIn, isAdmin, upload.single("logo"), addNewBrand);
router.post("/add-category", isLoggedIn, isAdmin, upload.single("image"), addNewCategory);
router.get("/get-product/:id", getProduct);
router.delete("/delete-product/:id", isLoggedIn, isAdmin, deleteProduct);

module.exports = router;
