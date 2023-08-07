const express = require("express"); 
const router = express.Router();
const {authLoginController} = require("../controllers/authController");


router.post("/register", AuthController.register); 
router.post("/login", authLoginController); 

module.exports = router; 