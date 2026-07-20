const app = require("./app");
const express = require("express");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || "ecom91";

const conn = async () => {
    try {
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is missing from .env");
        }

        await mongoose.connect(MONGODB_URI, {
            dbName: DB_NAME,
            family: 4,
            connectTimeoutMS: 10000,
            serverSelectionTimeoutMS: 10000,
        });
        console.log("Database connected successfully");
    } catch (err) {
        if (err.code === "ECONNREFUSED" && err.syscall === "querySrv") {
            console.error(
                "MongoDB Atlas DNS lookup was refused. Check your internet/DNS settings, try Google DNS/Cloudflare DNS, and confirm the Atlas cluster hostname is correct."
            );
        }

        console.error(err.message);
        process.exit(1);
    }
}

// static folder
app.use("/public", express.static(path.join(__dirname, "public")));

const productRoute = require("./routes/product");
app.use("/product", productRoute);

const authRoute = require("./routes/auth");
app.use("/auth", authRoute);

const userRoute = require("./routes/user");
app.use("/user", userRoute);

const orderRoute = require("./routes/order");
app.use("/order", orderRoute);


conn()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
