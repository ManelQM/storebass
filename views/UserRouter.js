const express = require("express"); 
const router = express.Router();
const { autheBearerMiddleware,isValidUser } = require("../middlewares/authMiddleware");

const { getMyProfile, } = require("../controllers/userController");


router.get("/myprofile",autheBearerMiddleware,isValidUser(), getMyProfile);



module.exports = router