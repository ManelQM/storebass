const express = require("express"); 
const router = express.Router();

const userController = require("../controllers/userController"); 

// ADMIN ACCESS
// router.get("/user/all", userController.getAll);


module.exports = router