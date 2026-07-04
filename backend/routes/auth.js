const express = require("express");
const { register, login, checkLogin, checkAdmin } = require("../controllers/authController");
const upload = require("../middlewares/upload");
const router = express.Router();

router.post("/register", upload.single("image"), register);
router.post("/login", login);
router.get("/check-login", checkLogin);
router.get("/check-admin", checkAdmin);

module.exports = router;
