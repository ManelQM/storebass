const express = require("express"); 
const router = express.Router();
const { autheBearerMiddleware ,isValidRole, isValidUser } = require("../middlewares/authMiddleware");
const {
    bringAllUsers,
    bringAllStore,
    deleteUser,
    deleteProduct,
} = require("../controllers/adminController");


router.get("/allusers",autheBearerMiddleware,isValidRole(1),bringAllUsers);
router.get("/allstore",autheBearerMiddleware,isValidRole(1),bringAllStore);
router.delete("/deleteuser",autheBearerMiddleware,isValidRole(1),deleteUser);
router.delete("/deleteproduct", autheBearerMiddleware,isValidRole(1),deleteProduct)

module.exports = router 