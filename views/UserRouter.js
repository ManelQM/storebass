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
  editMyEmail,
} = require("../controllers/userController");
const auth = require("../config/auth");

router.get("/myprofile", autheBearerMiddleware, isValidUser(), getMyProfile);
router.patch( "/updatemyprofile",autheBearerMiddleware,isValidUser(), updateMyProfile);
router.patch("/editmypassword",autheBearerMiddleware,isValidUser(),editMyPassword); 
router.patch("editmyemail",autheBearerMiddleware,isValidUser(),editMyEmail);

module.exports = router;
