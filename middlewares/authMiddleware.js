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






module.exports = {
    autheBearerMiddleware,
}