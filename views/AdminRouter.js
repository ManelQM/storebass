const express = require("express"); 
const router = express.Router();
const { autheBearerMiddleware ,isValidRole } = require("../middlewares/authMiddleware");
const {
    bringAllUsers,
    bringAllStore,
    deleteUser,
    deleteProduct,
    addProductStore,
} = require("../controllers/adminController");


router.get("/allusers",autheBearerMiddleware,isValidRole(1),bringAllUsers);
router.get("/allstore",autheBearerMiddleware,isValidRole(1),bringAllStore);
router.delete("/deleteuser",autheBearerMiddleware,isValidRole(1),deleteUser);
router.delete("/deleteproduct",autheBearerMiddleware,isValidRole(1),deleteProduct);
router.post("/addproduct",autheBearerMiddleware,isValidRole(1),addProductStore);

module.exports = router 