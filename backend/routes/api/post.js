const express = require("express");
const { dirname } = require("path");
const postContoller = require("../../controller/post.js");

const router = express.Router();

router.post("/", postContoller.createPost);

module.exports = router;