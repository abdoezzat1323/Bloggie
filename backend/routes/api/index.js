const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const authRouter = require("./auth");
const postRouter = require("./post");
const postReactRouter = require("./postReact");
const commentRouter = require("./comment");
const categoriesRouter = require("./categories");
const uploadRouter = require("./upload");
const searchRouter = require("./search");
const statisticshRouterRouter = require("./statistics");

/* GET home page. */
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/post", postRouter);
router.use("/postReact", postReactRouter);
router.use("/comment", commentRouter);
router.use("/category", categoriesRouter);
router.use("/upload", uploadRouter);
router.use("/search", searchRouter);
router.use("/statistics", statisticshRouterRouter);

router.get("/", (req, res) => {
  res.status(200).json("<h1>API working!</h1>");
});

module.exports = router;
