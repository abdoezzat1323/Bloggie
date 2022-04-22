const express = require("express");
const { dirname } = require("path");
const postContoller = require("../../controller/post.js");

const router = express.Router();

router.post("/", postContoller.createPost);
router.patch("/:id", postContoller.editPost);
router.post("/delete/:id", postContoller.deletePost);
router.get("/:id", postContoller.getPost);
router.get("/", postContoller.getPosts);

module.exports = router;