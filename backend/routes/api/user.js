const express = require("express");
const userContoller = require("../../controller/user.js");
const requireAuth = require("../../middleware/auth.js");

const router = express.Router();

/* GET home page. */
router.get("/", userContoller.getUsers);
router.post("/", userContoller.createUser);
router.get("/:id", requireAuth, userContoller.getUser);
router.patch("/:id", requireAuth, userContoller.updateUser);
router.get("/:id/public", userContoller.getUserPublicData);
router.get("/:id/online", userContoller.isOnline);
router.post("/:id/online", userContoller.setOnline);
router.get("/:id/activated", userContoller.isActivated);
router.post("/:id/activate", userContoller.activate);
router.get("/:id/isadmin", userContoller.isAdmin);
router.get("/:id/ispremium", userContoller.isPremium);

module.exports = router;