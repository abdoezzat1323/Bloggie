const express = require("express");
const { dirname } = require("path");
const commentContoller = require("../../controller/comment.js");

const router = express.Router();

router.post("/", commentContoller.createComment);
router.patch("/:id", commentContoller.updateComment);

module.exports = router;