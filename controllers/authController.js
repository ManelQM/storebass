const {models} = require("../models/index");
// const {user} = require("../models/user");
// const { Sequelize, Op } = require("sequelize");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken"); 
// const authConfig = require("../config/auth");

const {bcryptCompare} = require("../services/authServices"); 
require("dotenv").config();

