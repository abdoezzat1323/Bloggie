const express = require("express");
const { dirname } = require("path");
const commentContoller = require("../../controller/comment.js");
const requireAuth = require("../../middleware/auth.js");

const router = express.Router();

router.post("/", requireAuth, commentContoller.createComment);
router.patch("/:id", requireAuth, commentContoller.updateComment);
router.delete("/:id", requireAuth, commentContoller.updateComment);
router.patch("/:id", requireAuth, commentContoller.updateComment);

module.exports = router;