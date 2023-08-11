const models = require("../models/index");
const bcrypt = require("bcrypt");
const auth = require("../config/auth");
const jsonwebtoken = require("jsonwebtoken");


// Service to assert if the structure of the password is ok
const assertValidPasswordService = (pass) => {
  if (pass.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  if (!pass.match(/[a-z]/)) {
    throw new Error("Password must contain at least one lower case letter");
  }

  if (!pass.match(/[A-Z]/)) {
    throw new Error("Password must contain at least one upper case letter");
  }

  if (!pass.match(/[0-9]/)) {
    throw new Error("Password must contain at least one number");
  }
};

// Service to assert if the email structure is valid
// const assertEmailIsValidService = (email) => {
//   const emailRegex =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   const isValid = email.match(emailRegex);
//   if (!isValid) {
//     throw new Error("Email is invalid");
//   }
// };

// Service to assert if the email is already registered
const assertEmailIsUniqueService = async (email) => {
  const user = await models.User.findOne({
    where: { email: email },
  });
  if (user && user.deleted == false) {
  
    throw new Error("Email is already registered");
  }
};

// Service to encrypt a password and create a hash password

const encryptPasswordService = async (password) => {
  let hashedPassword = bcrypt.hashSync(
    req.body.password,
    Number.parseInt(authConfig.rounds)
  );
  return hashedPassword;
};

// Service to create a new user in the database
const createUserService = async (userBody) => {
  // const hash = encryptPasswordService(userBody.password);
  let hashedPassword = bcrypt.hashSync(
    userBody.password,
    Number.parseInt(auth.rounds)
  );
  // userBody.password = hash;

  const user = await models.User.create({
    email: userBody.email,
    password: hashedPassword,
    name: userBody.name,
    surname: userBody.surname,
    address: userBody.nickname,
    // idrole: 2,
  });
  return user;
};

const bcryptCompare = async (password, hashedPassword) => {
  const passCompare = await bcrypt.compare(password, hashedPassword);
  return passCompare;
};

// const adminPrivileges = async (req,res,next) => {
//   const {authorization} = req.headers;
//   const [action, jwt] = authorization.split("");
//   const payload = jsonwebtoken.verify (jwt, process.env.ACCESS_TOKEN_SECRET);
//   if (payload.idrole === 1) {
//     next();
//   } else {
//     res.status(403).json({message: "Access Denied"});
//   }
// }

const adminPrivileges = (role) => (req, res, next) => {
  console.log ("JWT:", req.headers.authorization);
  // console.log ("role:", role); 
  // console.log ("req:", req );
if (req.auth && req.auth?.role === role) { 

  // if (req.user?.role === role) {
    next();
    console.log(req.auth, "hola")
  } else {
    res.status(403).json({ message: "You dont have this privilege, sorry :(" });
  }
};

const isValidUser = (email) => async (req,res,next) => {
  email = req.auth.email;
  if(req.auth?.email === email) {
    next();
  } else {
    res.status(403).json ({ message: "You dont have this privilege, sorry :(" });
  }
};
module.exports = {
  assertValidPasswordService,
  // assertEmailIsValidService,
  assertEmailIsUniqueService,
  encryptPasswordService,
  createUserService,
  bcryptCompare,
  adminPrivileges, 
  isValidUser
};
