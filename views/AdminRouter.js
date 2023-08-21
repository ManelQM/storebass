const express = require("express"); 
const router = express.Router();
const { autheBearerMiddleware ,isValidRole, isValidUser } = require("../middlewares/authMiddleware");
const {
    bringAllUsers,
} = require("../controllers/adminController");


router.get("/allusers",autheBearerMiddleware,isValidRole(1),bringAllUsers);

module.exports = router 