const express = require("express"); 
const router = express.Router();
const {
    autheBearerMiddleware,
    isValidRole,
} = require("../middlewares/authMiddleware");

const {
    addProductToCart,
}= require("../controllers/cartController");

router.post("/addproducttocart",autheBearerMiddleware,isValidRole(2),addProductToCart);

module.exports = router; 