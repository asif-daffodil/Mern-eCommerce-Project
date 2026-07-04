const express = require("express");
const { getAllUsers, getUser, updateProfile } = require("../controllers/userController");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
const router = express.Router();

router.get("/all-users", isLoggedIn, isAdmin, getAllUsers);
router.put("/profile", isLoggedIn, upload.single("image"), updateProfile);
router.get("/:id", isLoggedIn, getUser);

module.exports = router;
