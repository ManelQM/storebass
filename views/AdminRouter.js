const express = require("express"); 
const router = express.Router();
const { autheBearerMiddleware ,isValidRole, isValidUser } = require("../middlewares/authMiddleware");
const {
    bringAllUsers,
    bringAllStore,
    deleteUser,
} = require("../controllers/adminController");


router.get("/allusers",autheBearerMiddleware,isValidRole(1),bringAllUsers);
router.get("/allstore",autheBearerMiddleware,isValidRole(1),bringAllStore);
router.delete("/deleteuser",autheBearerMiddleware,isValidRole(1),deleteUser);

module.exports = router 