const express = require("express");
const { dirname } = require("path");
const userContoller = require(dirname(require.main.filename) +
    "/controller/user.js");
const requireAuth = require("../../middleware/auth.js");

const router = express.Router();

router.post("/login", userContoller.login);
router.post("/verify", requireAuth);

module.exports = router;