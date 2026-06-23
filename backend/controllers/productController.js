const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
    const allProducts = await Product.find();
    res.json(allProducts);
}

module.exports = {
    getAllProducts
};