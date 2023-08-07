const {models} = require("../models/index");
// const {user} = require("../models/user");
// const { Sequelize, Op } = require("sequelize");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken"); 
// const authConfig = require("../config/auth");

const {bcryptCompare} = require("../services/authServices"); 
require("dotenv").config();

const jsonwebtoken = require("jsonwebtoken"); 
const authConfig = require("../config/auth"); 

// const authLoginController = async (req, res) => {
//     const {email, password} = req.body; 
// }

// try {
//     const response = await models.User.findOne({where: {email:email}});
    
//     if (!response) {
//         res.status(401).json({message: "Sorry, email or password incorrects"});
//         return; 
//     }

//     if (response.deleted == true) {
//         res.status(401).json({
//             message: "Access area denied"
//         });
//         return; 
//     }

//     // BCRYPTCOMPARE

//     const (responseBcryptCompare == false) {
//         res.status(400).json({message: "Passwpr" })
//     }

// }
const authLoginController = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const resultado = await models.User.findOne({ where: { email: email } });
  
      if (!resultado) {
        res.status(401).json({ message: "Email or Password incorrects" });
        return;
      }
  
      if (resultado.deleted == true) {
        res.status(401).json({ message: "Access Denied" });
        return;
      }
  
      // bcryptCompare
  
      const respBcryptCompare = await bcryptCompare(password, resultado.password);
  
      if (respBcryptCompare == false) {
        res.status(400).json({ message: "Password or Email incorrect!" });
      } else {
        const secret = process.env.ACCESS_TOKEN_SECRET;
  
        let token = jsonwebtoken.sign({ user: resultado }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });
        res.status(200).json({
          message: "Login with success",
          jwt: token,
        });
      }
    } catch (error) {
      res.send(error);
    }
  };
  
  module.exports = {
    authLoginController,
  };