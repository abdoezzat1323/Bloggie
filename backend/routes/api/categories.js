const express = require("express");
const { dirname } = require("path");
const categoriesContoller = require("../../controller/categories.js");

const router = express.Router();

router.get("/", categoriesContoller.getCategories);
router.get("/:id", categoriesContoller.getOnecategory);
router.post("/", categoriesContoller.createCategories);
router.patch("/:id", categoriesContoller.updateCategories);
router.delete("/:id", categoriesContoller.deleteCategories);
module.exports = router;
