const express = require("express");
const statisticsContoller = require("../../controller/statistics.js");
const blogContoller = require("../../controller/blog.js");

const router = express.Router();

router.get("/", statisticsContoller.getStatistics);
router.get("/visitors", blogContoller.getVisitors);

module.exports = router;