const express = require("express"); 
const router = express.Router();
const { autheBearerMiddleware ,isValidRole, isValidUser } = require("../middlewares/authMiddleware");
const {
    bringAllUsers,
} = require("../controllers/adminController");


router.get("/allusers",autheBearerMiddleware,isValidRole(),bringAllUsers);

module.exports = router 