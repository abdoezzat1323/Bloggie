const express = require("express");
const searchContoller = require("../../controller/search");
const router = express.Router();

router.get("/", searchContoller.getSearch);
module.exports = router;
