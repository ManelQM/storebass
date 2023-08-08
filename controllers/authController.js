const models = require("../models/index");
const {bcryptCompare} = require("../services/authServices"); 
require("dotenv").config();

const jsonwebtoken = require("jsonwebtoken"); 
const authConfig = require("../config/auth"); 

const authLoginController = async (req,res) => {

  const {email,password} = req.body; 
  
  try {
    const result = await models.User.findOne({where:{email: email}}); 

    if (!result) {
      res.status(401).json({message: "Email or password doesnt match"});
      return;
    }
    if(result.deleted == true) {
      res.status(401).json({message:"Access Denied: You Shall Not Pass!!"});
      return;
    }
    const responseBcryptCompare = await bcryptCompare(password, result.password);
    if(responseBcryptCompare == false) {
      res.status(400).json({message: "Password or Email are incorrect"});
    }else {
      const secret = process.env.ACCESS_TOKEN_SECRET;
      
      let token = jsonwebtoken.sign({ user: result}, authConfig.secret,{
        expiresIn:authConfig.expires,
      });
      res.status(200).json({
        message: "Login with success",
        jwt: token,
      })
    }
  }catch (error) {
    res.send(error);
  }
}
  
  module.exports = {
    authLoginController,
 
  };