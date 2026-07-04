const express = require("express");
const { getAllUsers, getUser } = require("../controllers/userController");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");
const router = express.Router();

router.get("/all-users", isLoggedIn, isAdmin, getAllUsers);
router.get("/:id", isLoggedIn, getUser);

module.exports = router;
