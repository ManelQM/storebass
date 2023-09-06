const express = require("express"); 
const router = express.Router();
const {
    autheBearerMiddleware,
    isValidUser,
} = require("../middlewares/authMiddleware");

const {
    addProductToCart,
}= require("../controllers/cartController");

router.post("/addproducttocart",autheBearerMiddleware,isValidUser(),addProductToCart);

module.exports = router; 