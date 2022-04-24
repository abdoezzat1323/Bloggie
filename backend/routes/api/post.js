const express = require("express");
const postContoller = require("../../controller/post.js");
const requireAuth = require("../../middleware/auth.js");

const router = express.Router();

router.post("/", requireAuth, postContoller.createPost);
router.patch("/:id", requireAuth, postContoller.editPost);
router.delete("/delete/:id", requireAuth, postContoller.deletePost);
router.get("/:id", postContoller.getPost);
router.get("/", postContoller.getPosts);

module.exports = router;