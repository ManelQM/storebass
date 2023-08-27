const jsonwebtoken = require("jsonwebtoken");

require("dotenv").config();

// AUTHENTIFICATION

const autheBearerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  // console.log(req.headers);
  try {
    if (strategy.toLowerCase() !== "bearer") {
      throw new Error("Invalid strategy");
    }
    // console.log(res, "JWT")

    const payload = jsonwebtoken.verify(jwt, process.env.AUTH_SECRET);
    // console.log(payload)
    req.auth = payload;

    next();
  } catch (error) {
    res.status(401).json({ message: "Not authentification. Please log" });
    return;
  }
};

// VERIFY ACCESS TO SPECIFIC RESTRICTED AREAS BASED ON THE USER ROLE

const isValidRole = (role) => async (req, res, next) => {
  console.log(req, "esto es la request");
  try {
    if (req.auth?.user.roleid === role) {
      next();
    } else {
      res.status(403).json({ message: "You are not the admin, access denied" });
    }
  } catch (error) {
    res.status(500).json({ message: "Role error" });
  }
};

// AUTH ACCESS TO SOME REQUESTS-AREAS-ENDPOINTS

const isValidUser = (email) => async (req, res, next) => {
  try {
    if (req.auth?.email === email) {
      next();
    } else {
      res.status(403).json({ message: "Not authorized as validUser" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An unexpected error occurred with authUser" });
  }
};

const isValidUserId = (id) => (req, res, next) => {
  try {
    id = req.params.id || req.body.id;
    // console.log(id);
    // console.log(req.auth.id);
    if (req.auth?.id == id) {
      next();
    } else {
      res.status(403).json({ message: "You are not authorized" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = {
  autheBearerMiddleware,
  isValidRole,
  isValidUser,
  isValidUserId,
};
