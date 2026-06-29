const Product = require("../models/Product");
const Brand = require("../models/Brand");
const Category = require("../models/Category");

const getAllProducts = async (req, res) => {
    const allProducts = await Product.find();
    res.json(allProducts);
}

const getAllBrands = async (req, res) => {
    const allBrands = await Brand.find();
    res.json(allBrands);
}

const getAllCategories = async (req, res) => {
    const allCategories = await Category.find();
    res.json(allCategories);
}

module.exports = {
    getAllProducts,
    getAllBrands,
    getAllCategories
};