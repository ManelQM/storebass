const express = require("express"); 
const router = express.Router();
const { isValidRole, isValidUser } = require("../middlewares/authMiddleware");
const {
    bringAllUsers,
} = require("../controllers/adminController");


router.get("/allusers",isValidRole(1),bringAllUsers);

module.exports = router 