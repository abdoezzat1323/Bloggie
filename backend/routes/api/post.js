const express = require("express");
const postContoller = require("../../controller/post.js");
const requireAuth = require("../../middleware/auth.js");
const postsMid = require("../../middleware/post.js");

const router = express.Router();

router.post("/", requireAuth, postsMid.canPost, postContoller.createPost);
router.patch("/:id", requireAuth, postContoller.editPost);
router.delete("/delete/:id", requireAuth, postContoller.deletePost);
router.get("/:id", postContoller.getPost);
router.get("/", postContoller.getPosts);
router.post("/:id/pin", postContoller.pinPost);
router.post("/:id/unpin", postContoller.unPinPost);

module.exports = router;