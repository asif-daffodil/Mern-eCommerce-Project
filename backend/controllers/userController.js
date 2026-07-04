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

module.exports = {
    getAllUsers,
    getUser,
};
