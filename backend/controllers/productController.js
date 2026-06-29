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

const addNewProduct = async (req, res) => {
    try {
        const {
            name,
            slug,
            description,
            price,
            discountPrice,
            category,
            brand,
            stock,
            sku,
            material,
            color,
            size,
            isFeatured, // frontend flag only
        } = req.body;

        // -------------------------
        // 1. images from multer
        // -------------------------
        let uploadedImages = [];

        if (req.files && req.files.length > 0) {
            uploadedImages = req.files.map((file) => ({
                url: `/public/uploads/${file.filename}`,
                alt: name,
            }));
        }

        // -------------------------
        // 2. DB transformation (IMPORTANT PART)
        // -------------------------

        const featuredImage =
            uploadedImages.length > 0
                ? uploadedImages[0] // DB featuredImage
                : null;

        const galleryImages =
            uploadedImages.length > 1
                ? uploadedImages.slice(1)
                : [];

        // -------------------------
        // 3. CREATE DB OBJECT
        // -------------------------
        const productData = {
            name,
            slug,
            description,
            price,
            discountPrice,
            category,
            brand,
            stock,
            sku,
            attributes: {
                color: color ? color.split(",") : [],
                size: size ? size.split(",") : [],
                material,
            },

            // DB STRUCTURE (DIFFERENT FROM FRONTEND)
            featuredImage,
            images: galleryImages,

            // frontend flag → DB simple boolean
            isFeatured: isFeatured === "true" || isFeatured === true,
        };

        // -------------------------
        // 4. SAVE
        // -------------------------
        const product = await Product.create(productData);

        res.status(201).json({
            success: true,
            product,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = {
    getAllProducts,
    getAllBrands,
    getAllCategories,
    addNewProduct
};