const express = require("express");
const userContoller = require("../../controller/user.js");
const requireAuth = require("../../middleware/auth.js");

const router = express.Router();

router.post("/login", userContoller.login);
module.exports = router;