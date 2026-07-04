const jwt = require("jsonwebtoken");
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

const getUserFromToken = async (req) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return null;
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev_secret");

    return User.findById(decoded.id).select("name email image role isActive createdAt updatedAt");
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

        const userData = { name, email, password };

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

const checkLogin = async (req, res) => {
    try {
        const user = await getUserFromToken(req);

        if (!user || !user.isActive) {
            return res.status(401).json({
                success: false,
                isLoggedIn: false,
                message: "User is not logged in",
            });
        }

        res.json({
            success: true,
            isLoggedIn: true,
            user,
        });
    } catch (err) {
        res.status(401).json({
            success: false,
            isLoggedIn: false,
            message: "Invalid or expired token",
        });
    }
};

const checkAdmin = async (req, res) => {
    try {
        const user = await getUserFromToken(req);

        if (!user || !user.isActive) {
            return res.status(401).json({
                success: false,
                isLoggedIn: false,
                isAdmin: false,
                message: "User is not logged in",
            });
        }

        if (user.role !== "admin") {
            return res.status(403).json({
                success: false,
                isLoggedIn: true,
                isAdmin: false,
                message: "Admin access required",
            });
        }

        res.json({
            success: true,
            isLoggedIn: true,
            isAdmin: true,
            user,
        });
    } catch (err) {
        res.status(401).json({
            success: false,
            isLoggedIn: false,
            isAdmin: false,
            message: "Invalid or expired token",
        });
    }
};

module.exports = {
    register,
    login,
    checkLogin,
    checkAdmin,
};
