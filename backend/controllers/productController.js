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

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
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
            isFeatured,
            isActive,
        } = req.body;

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        const updateData = {};

        if (name !== undefined) updateData.name = name;
        if (slug !== undefined) updateData.slug = slug;
        if (description !== undefined) updateData.description = description;
        if (price !== undefined) updateData.price = price;
        if (discountPrice !== undefined) updateData.discountPrice = discountPrice;
        if (category !== undefined) updateData.category = category;
        if (brand !== undefined) updateData.brand = brand;
        if (stock !== undefined) updateData.stock = stock;
        if (sku !== undefined) updateData.sku = sku;
        if (isFeatured !== undefined)
            updateData.isFeatured =
                isFeatured === "true" || isFeatured === true;
        if (isActive !== undefined)
            updateData.isActive = isActive === "true" || isActive === true;

        const attributes = { ...product.attributes };
        if (material !== undefined) attributes.material = material;
        if (color !== undefined)
            attributes.color = color
                ? color
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean)
                : [];
        if (size !== undefined)
            attributes.size = size
                ? size
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean)
                : [];

        if (
            material !== undefined ||
            color !== undefined ||
            size !== undefined
        ) {
            updateData.attributes = attributes;
        }

        if (req.files && req.files.length > 0) {
            const uploadedImages = req.files.map((file) => ({
                url: `/public/uploads/${file.filename}`,
                alt: name || product.name || "",
            }));

            updateData.featuredImage = uploadedImages[0];
            updateData.images = uploadedImages.slice(1);
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        });

        res.json({
            success: true,
            product: updatedProduct,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

const addNewBrand = async (req, res) => {
    try {
        const { name, slug, description, isActive } = req.body;

        const brandData = {
            name,
            slug,
            description,
            isActive: isActive === "true" || isActive === true,
        };

        if (req.file) {
            brandData.logo = `/public/uploads/${req.file.filename}`;
        }

        const brand = await Brand.create(brandData);

        res.status(201).json({
            success: true,
            brand,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

const addNewCategory = async (req, res) => {
    try {
        const { name, slug, description, isActive } = req.body;

        const categoryData = {
            name,
            slug,
            description,
            isActive: isActive === "true" || isActive === true,
        };

        if (req.file) {
            categoryData.image = `/public/uploads/${req.file.filename}`;
        }

        const category = await Category.create(categoryData);

        res.status(201).json({
            success: true,
            category,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productInfo = await Product.findById(id)
            .populate("category", "name")
            .populate("brand", "name");

        if (!productInfo) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.json({ productInfo });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

const deleteProduct = async (req, res) => {
    const path = require("path");
    const fs = require("fs");
    try {
        const { id } = req.params;
        // delete previously uploaded images from the server
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        // Delete previously uploaded images from the server
        if (product.images) {
            product.images.forEach((image) => {
                const imagePath = path.join(__dirname, "..", image);
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            });
        }

        // Delete the product from the database
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.json({
            success: true,
            message: "Product deleted successfully",
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
    addNewProduct,
    updateProduct,
    addNewBrand,
    addNewCategory,
    getProduct,
    deleteProduct,
};
