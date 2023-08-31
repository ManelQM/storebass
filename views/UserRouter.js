const express = require("express"); 
const router = express.Router();
const { isValidUser } = require("../middlewares/authMiddleware");

const { getMyProfile, } = require("../controllers/userController");


router.get("/myprofile",isValidUser(), getMyProfile);



module.exports = router