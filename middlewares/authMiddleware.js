const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

// AUTHENTIFICATION 

const autheBearerMiddleware = async (req,res,next) => {
    const {authorization} = req.headers;
    try{
        const [strategy, jwt] = authorization.split(" ");
        if (strategy.toLowerCase() !== "bearer") {
            throw new Error ("Invalid strategy");
        }

        const payload = jsonwebtoken.verify(jwt, process.env,JWT_SECRET);
        req.auth = payload; 
        next();
    } catch (error) {
        res
        .status(401)
        .json({message: "Not authentification. Please log"}); 
        return;
    }
};

// VERIFY ACCESS TO SPECIFIC RESTRICTED AREAS BASED ON THE USER ROLE

const isValidRole = (role) => async(req,res,next) => {
    try {
        if (req.auth?.role === role) {
            next();
        } else {
            res.status(403).json({message: "You are not the admin, access denied"});
        }
    } catch (error) {
        res.status(500).json({message: "Role error"})
    }
};

const isValidUser = (email) => async (req,res,next) => {
    email = req.auth.email;
    if (req.auth?.email === email) {
        next();
    } else {
        res.status(403).json ({message: "Not authorized as validUser"});
    }
};





module.exports = {
    autheBearerMiddleware,
    isValidRole,
    isValidUser,
}