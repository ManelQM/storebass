const router = require("express").Router(); 

const auth = require ("./config/auth");

const UserRouter = require("./views/UserRouter");
const AuthRouter = require("./views/AuthRouter"); 
const AdminRouter = require("./views/AdminRouter");

router.use("/user", UserRouter); 
router.use("/auth", AuthRouter); 
router.use("/admin",AdminRouter);

module.exports = router; 