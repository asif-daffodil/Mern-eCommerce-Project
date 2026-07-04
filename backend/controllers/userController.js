const User = require("../models/User");
const mongoose = require("mongoose");

const safeUserFields = "name email image role isActive createdAt updatedAt";

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
            .select(safeUserFields)
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            users,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid user id",
            });
        }

        const user = await User.findById(id).select(safeUserFields);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.json({
            success: true,
            user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

const updateProfile = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findById(req.user._id).select("+password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (email && email !== user.email) {
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(409).json({
                    success: false,
                    message: "User already exists with this email",
                });
            }

            user.email = email;
        }

        if (name) {
            user.name = name;
        }

        if (password) {
            user.password = password;
        }

        if (req.file) {
            user.image = `/public/uploads/${req.file.filename}`;
        }

        await user.save();

        res.json({
            success: true,
            message: "Profile updated successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                image: user.image,
                role: user.role,
                isActive: user.isActive,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = {
    getAllUsers,
    getUser,
    updateProfile,
};
