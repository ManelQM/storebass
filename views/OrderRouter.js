const express = require("express"); 
const router = express.Router();

const {
    autheBearerMiddleware,
    isValidRole,
} = require("../middlewares/authMiddleware");

const { 
    makeOrder,
} = require("../controllers/orderController");

router.post("/makeorder",autheBearerMiddleware,isValidRole(2),makeOrder);

module.exports = router;