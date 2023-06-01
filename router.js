const router = require("express").Router(); 

const auth = require ("./config/auth");

const UserRouter = require("./views/UserRouter");
const AuthRouter = require("./views/AuthRouter"); 

router.use("/user", UserRouter); 
router.use("/auth", AuthRouter); 

module.exports = router; 