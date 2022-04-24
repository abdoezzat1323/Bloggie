const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const authRouter = require("./auth");
const postRouter = require("./post");
const commentRouter = require("./comment");
const uploadRouter = require("./upload");

/* GET home page. */
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/post", postRouter);
router.use("/comment", commentRouter);
router.use("/upload", uploadRouter);

router.get("/", (req, res) => {
    res.status(200).json("<h1>API working!</h1>");
});

module.exports = router;