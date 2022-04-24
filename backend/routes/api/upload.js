const express = require("express");
const uploadContoller = require("../../controller/upload.js");
const requireAuth = require("../../middleware/auth.js");

const router = express.Router();

router.post(
    "/",
    // requireAuth,
    uploadContoller.upload.single("file"),
    uploadContoller.uploadFile
);

module.exports = router;