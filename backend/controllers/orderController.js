const Order = require("../models/Order");
const Product = require("../models/Product");

// @desc    Create new order
// @route   POST /order/create
// @access  Private
const createOrder = async (req, res) => {
    try {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        } = req.body;

        if (!orderItems || orderItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No order items provided",
            });
        }

        // Verify stock for each item
        for (const item of orderItems) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: `Product ${item.name} not found`,
                });
            }
            if (product.stock < item.quantity) {
                return res.status(400).json({
                    success: false,
                    message: `Insufficient stock for ${product.name}. Available: ${product.stock}`,
                });
            }
        }

        // Decrease stock
        for (const item of orderItems) {
            await Product.findByIdAndUpdate(item.product, {
                $inc: { stock: -item.quantity },
            });
        }

        const order = await Order.create({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        res.status(201).json({
            success: true,
            order,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// @desc    Get single order by ID
// @route   GET /order/:id
// @access  Private
const getOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id)
            .populate("user", "name email")
            .populate("orderItems.product", "name price slug");

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        // Users can only see their own orders; admins can see all
        if (
            req.user.role !== "admin" &&
            order.user._id.toString() !== req.user._id.toString()
        ) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to view this order",
            });
        }

        res.json({
            success: true,
            order,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// @desc    Get logged-in user's orders
// @route   GET /order/my-orders
// @access  Private
const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }).sort({
            createdAt: -1,
        });

        res.json({
            success: true,
            count: orders.length,
            orders,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// @desc    Get all orders — admin only
// @route   GET /order/all-orders
// @access  Private/Admin
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
            .populate("user", "name email")
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: orders.length,
            orders,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// @desc    Update order to paid
// @route   PUT /order/:id/pay
// @access  Private/Admin
const updateOrderToPaid = async (req, res) => {
    try {
        const { id } = req.params;
        const { paymentResult } = req.body;

        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = paymentResult || {};

        const updatedOrder = await order.save();

        res.json({
            success: true,
            order: updatedOrder,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// @desc    Update order to delivered
// @route   PUT /order/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = async (req, res) => {
    try {
        const { id } = req.params;

        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        order.isDelivered = true;
        order.deliveredAt = Date.now();
        order.orderStatus = "delivered";

        const updatedOrder = await order.save();

        res.json({
            success: true,
            order: updatedOrder,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// @desc    Update order status
// @route   PUT /order/:id/status
// @access  Private/Admin
const updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { orderStatus } = req.body;

        const validStatuses = [
            "processing",
            "confirmed",
            "shipped",
            "delivered",
            "cancelled",
        ];

        if (!validStatuses.includes(orderStatus)) {
            return res.status(400).json({
                success: false,
                message: `Invalid status. Valid values: ${validStatuses.join(", ")}`,
            });
        }

        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        order.orderStatus = orderStatus;

        // Auto-set delivery flags based on status
        if (orderStatus === "delivered") {
            order.isDelivered = true;
            order.deliveredAt = Date.now();
        }

        const updatedOrder = await order.save();

        res.json({
            success: true,
            order: updatedOrder,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// @desc    Cancel / delete order
// @route   DELETE /order/:id
// @access  Private
const cancelOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        // Only the order owner or an admin can cancel
        if (
            req.user.role !== "admin" &&
            order.user.toString() !== req.user._id.toString()
        ) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to cancel this order",
            });
        }

        // Prevent cancelling already delivered orders
        if (order.isDelivered) {
            return res.status(400).json({
                success: false,
                message: "Cannot cancel an order that has already been delivered",
            });
        }

        // Restore stock
        for (const item of order.orderItems) {
            await Product.findByIdAndUpdate(item.product, {
                $inc: { stock: item.quantity },
            });
        }

        await Order.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Order cancelled and stock restored successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = {
    createOrder,
    getOrder,
    getMyOrders,
    getAllOrders,
    updateOrderToPaid,
    updateOrderToDelivered,
    updateOrderStatus,
    cancelOrder,
};
