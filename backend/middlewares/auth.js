const jwt = require("jsonwebtoken");
const User = require("../models/User");

const safeUserFields = "name email image role isActive createdAt updatedAt";

const isLoggedIn = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Please login first",
            });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev_secret");
        const user = await User.findById(decoded.id).select(safeUserFields);

        if (!user || !user.isActive) {
            return res.status(401).json({
                success: false,
                message: "User is not logged in",
            });
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};

const isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).json({
            success: false,
            message: "Admin access required",
        });
    }

    next();
};

module.exports = {
    isLoggedIn,
    isAdmin,
};
