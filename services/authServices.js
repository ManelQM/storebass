const models = require("../models/index");
const bcrypt = require("bcrypt");
const auth = require("../config/auth");
const jsonwebtoken = require("jsonwebtoken");

// VALID PASSWORD REQUIREMENTS

const assertValidPasswordService = (password) => {
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  if (!password.match(/[a-z]/)) {
    throw new Error("Password must contain at least one lower case letter");
  }

  if (!password.match(/[A-Z]/)) {
    throw new Error("Password must contain at least one upper case letter");
  }

  if (!password.match(/[0-9]/)) {
    throw new Error("Password must contain at least one number");
  }
};

// VALID EMAIL

const assertEmailIsValidService = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = email.match(emailRegex);
  if (!isValid) {
    throw new Error("Email is invalid");
  }
};

// REGISTERED EMAIL CHECK

const assertEmailIsUniqueService = async (email) => {
  const user = await models.User.findOne({
    where: { email: email },
  });
  if (user && user.deleted == false) {
    throw new Error("Email is already registered");
  }
};

// ENCRYPT PASSWORD + HASHED PASSWORD

const encryptPasswordService = async (password) => {
  let hashedPassword = bcrypt.hashSync(
    req.body.password,
    Number.parseInt(authConfig.rounds)
  );
  return hashedPassword;
};

// ENCRYPT PASSWORD WHEN USER WANTS TO CHANGE THEIR ACTUAL PASSWORD

const encryptPasswordService2 = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(
      password,
      Number.parseInt(process.env.AUTH_ROUNDS)
    );
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing password");
  }
};

// CREATE USER FOR THE REGISTER CONTROLLER

const createUserService = async (userBody) => {
  let hashedPassword = bcrypt.hashSync(
    userBody.password,
    Number.parseInt(auth.rounds)
  );

  const user = await models.User.create({
    name: userBody.name,
    email: userBody.email,
    password: hashedPassword,
    surname: userBody.surname,
    address: userBody.address,
    postalCode: userBody.postalCode,
    city: userBody.city,
    country: userBody.country,
    movilephone: userBody.movilephone,
  });
  return user;
};

const bcryptCompare = async (password, hashedPassword) => {
  const passCompare = await bcrypt.compare(password, hashedPassword);
  return passCompare;
};

// ADMIN ACCESS

const adminPrivileges = (role) => (req, res, next) => {
  if (req.auth && req.auth?.role === role) {
    next();
  } else {
    res.status(403).json({ message: "You dont have this privilege, sorry :(" });
  }
};

// USER/ADMIN ACCESS

const isValidUser = (email) => async (req, res, next) => {
  email = req.auth.email;
  if (req.auth?.email === email) {
    next();
  } else {
    res.status(403).json({ message: "You dont have this privilege, sorry :(" });
  }
};
module.exports = {
  assertValidPasswordService,
  assertEmailIsValidService,
  assertEmailIsUniqueService,
  encryptPasswordService,
  encryptPasswordService2,
  createUserService,
  bcryptCompare,
  adminPrivileges,
  isValidUser,
};
