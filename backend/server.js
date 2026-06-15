const app = require("./app");
const express = require("express");
const path = require("path");

// static folder
app.use("/public", express.static(path.join(__dirname, "public")));

require("dotenv").config();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
