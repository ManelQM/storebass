const express = require("express");
const router = express.Router();
const {
  autheBearerMiddleware,
  isValidUser,
} = require("../middlewares/authMiddleware");

const {
  getMyProfile,
  updateMyProfile,
  editMyPassword,
} = require("../controllers/userController");

router.get("/myprofile", autheBearerMiddleware, isValidUser(), getMyProfile);
router.patch( "/updatemyprofile",autheBearerMiddleware,isValidUser(), updateMyProfile);
router.patch("/editmypassword",autheBearerMiddleware,isValidUser(),editMyPassword); 

module.exports = router;
