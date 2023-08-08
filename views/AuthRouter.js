const express = require("express"); 
const router = express.Router();
const {authLoginController, authRegisterController} = require("../controllers/authController");


// router.post("/register", authRegisterController); 
router.post("/login", authLoginController); 

module.exports = router; 