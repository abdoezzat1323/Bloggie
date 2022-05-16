const express = require("express");
const statisticsContoller = require("../../controller/statistics.js");

const router = express.Router();

router.get("/", statisticsContoller.getStatistics);

module.exports = router;
