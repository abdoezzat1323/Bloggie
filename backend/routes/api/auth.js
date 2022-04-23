const express = require("express");
const userContoller = require("../../controller/user.js");
const requireAuth = require("../../middleware/auth.js");

const router = express.Router();

router.post("/login", userContoller.login);
router.post("/verify", requireAuth);

module.exports = router;