const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const createToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET || "dev_secret", {
        expiresIn: "7d",
    });
};

const sendAuthResponse = (res, statusCode, user) => {
    res.status(statusCode).json({
        success: true,
        token: createToken(user._id),
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
            isActive: user.isActive,
        },
    });
};

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and password are required",
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists with this email",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = { name, email, password: hashedPassword };

        if (req.file) {
            userData.image = `/public/uploads/${req.file.filename}`;
        }

        const user = await User.create(userData);

        sendAuthResponse(res, 201, user);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        if (!user.isActive) {
            return res.status(403).json({
                success: false,
                message: "This account is inactive",
            });
        }

        sendAuthResponse(res, 200, user);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = {
    register,
    login,
};
