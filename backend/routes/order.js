const express = require("express");
const {
    createOrder,
    getOrder,
    getMyOrders,
    getAllOrders,
    updateOrderToPaid,
    updateOrderToDelivered,
    updateOrderStatus,
    cancelOrder,
} = require("../controllers/orderController");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");

const router = express.Router();

// Public (authenticated)
router.post("/create", isLoggedIn, createOrder);
router.get("/my-orders", isLoggedIn, getMyOrders);
router.get("/:id", isLoggedIn, getOrder);
router.delete("/:id", isLoggedIn, cancelOrder);

// Admin only
router.get("/all-orders", isLoggedIn, isAdmin, getAllOrders);
router.put("/:id/pay", isLoggedIn, isAdmin, updateOrderToPaid);
router.put("/:id/deliver", isLoggedIn, isAdmin, updateOrderToDelivered);
router.put("/:id/status", isLoggedIn, isAdmin, updateOrderStatus);

module.exports = router;
