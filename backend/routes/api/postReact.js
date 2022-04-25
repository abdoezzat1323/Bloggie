const express = require("express");
const { dirname } = require("path");
const postReactContoller = require("../../controller/postReact.js");
const requireAuth = require("../../middleware/auth.js");

const router = express.Router();

router.post("/", requireAuth , postReactContoller.createReact);
router.put("/:postId", requireAuth , postReactContoller.updateReact);

module.exports = router;