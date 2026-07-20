const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
});

const shippingAddressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        orderItems: [orderItemSchema],

        shippingAddress: shippingAddressSchema,

        paymentMethod: {
            type: String,
            required: true,
            enum: ["card", "cash"],
            default: "cash",
        },

        paymentResult: {
            id: String,
            status: String,
            update_time: String,
            email_address: String,
        },

        itemsPrice: {
            type: Number,
            required: true,
            min: 0,
        },

        taxPrice: {
            type: Number,
            required: true,
            min: 0,
        },

        shippingPrice: {
            type: Number,
            required: true,
            min: 0,
        },

        totalPrice: {
            type: Number,
            required: true,
            min: 0,
        },

        isPaid: {
            type: Boolean,
            default: false,
        },

        paidAt: Date,

        isDelivered: {
            type: Boolean,
            default: false,
        },

        deliveredAt: Date,

        orderStatus: {
            type: String,
            enum: ["processing", "confirmed", "shipped", "delivered", "cancelled"],
            default: "processing",
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
