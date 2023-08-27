const express = require("express"); 
const router = express.Router();
const { autheBearerMiddleware ,isValidRole, isValidUser } = require("../middlewares/authMiddleware");
const {
    bringAllUsers,bringAllStore
} = require("../controllers/adminController");


router.get("/allusers",autheBearerMiddleware,isValidRole(1),bringAllUsers);
router.get("/allstore",autheBearerMiddleware,isValidRole(1),bringAllStore)

module.exports = router 