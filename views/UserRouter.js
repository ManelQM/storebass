const express = require("express");
const router = express.Router();
const {
  autheBearerMiddleware,
  isValidUser,
} = require("../middlewares/authMiddleware");

const {
  getMyProfile,
  updateMyProfile,
} = require("../controllers/userController");

router.get("/myprofile", autheBearerMiddleware, isValidUser(), getMyProfile);
router.patch( "/updatemyprofile",autheBearerMiddleware,isValidUser(), updateMyProfile);

module.exports = router;
