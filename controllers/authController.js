const models = require("../models/index");
const {
  assertEmailIsValidService,
  assertValidPasswordService,
  assertEmailIsUniqueService,
  createUserService,
  bcryptCompare} = require("../services/authServices"); 

const jsonwebtoken = require("jsonwebtoken"); 
const authConfig = require("../config/auth"); 

const authRegisterController = async (req,res) => {
  const body = req.body;

  //ASSERT VALID PASSWORD "AUTHSERVICE"
  try{
    assertValidPasswordService(body.password);
  } catch (error) {
    console.error(error);
    res.status(400).json({message: "Invalid Password"});
    return;
  }
  //ASSERT VALID EMAIL "AUTHSERVICE"
  // try {
  //   assertEmailIsValidService(body.mail);
  // }catch (error) {
  //   console.error(error);
  //   res.status(400).json({message:"Not valid Email"});
  //   return;
  // }
  //ASSERT EMAIL IS UNIQUE "AUTHSERVICE"
  try{
    assertEmailIsUniqueService(body.mail);
  }catch (error) {
    console.error(error);
    res.status(400).json({message:"Email already take it"});
    return;
  }
  //CREATE USER "AUTHSERVICE"
  try {
    const RegisterUser = await createUserService(body);
    res.status(201).json(RegisterUser)
  }catch (error) {
    console.error(error)
    res.status(500).json({message: error.message},{message: "Error creating user :____( "})
  }
}

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
    authRegisterController,
 
  };