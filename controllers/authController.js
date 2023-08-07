const {models} = require("../models/index");
const jsonwebtoken = require("jsonwebtoken"); 
const authConfig = require("../config/auth"); 
const {bcryptCompare} = require("../services/authServices"); 
require("dotenv").config();


const authLoginController = async (req,res) => {
  const {email,password} = req.body; 
  
  try {
    const result = await models.User.findOne({where:{email: email}}); 
  }
}
  
  module.exports = {
    authLoginController,
  };