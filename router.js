const express = require("express")
const {autheBearerMiddleware} = require("./middlewares/authMiddleware");
const router = express.Router(); 


const UserRouter = require("./views/UserRouter");
const AuthRouter = require("./views/AuthRouter"); 
const AdminRouter = require("./views/AdminRouter");

router.use("/auth", AuthRouter); 
router.use(autheBearerMiddleware);
router.use("/user", UserRouter); 
router.use("/admin",AdminRouter);

module.exports = router; 