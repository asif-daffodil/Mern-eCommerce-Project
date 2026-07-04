const express = require("express");
const { getAllUsers, getUser } = require("../controllers/userController");
const router = express.Router();

router.get("/all-users", getAllUsers);
router.get("/:id", getUser);

module.exports = router;
