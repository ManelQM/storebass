const {user} = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 
const authConfig = require("../config/auth");
const auth = require("../config/auth");

const AuthController = {}; 

// LOGIN 
AuthController.login = (req, res) => {
    let { email, password } = req.body; 
    //Search User
    user.findOne ({where: {email: email }
    }).then(user => {
        if (!user) {
            res.status(404).json({msg : "User not found"})
        } else {
            if (bcrypt.compareSync(password, user.password)) {
                // The creation of the Token
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.json({
                    user: user,
                    token: token
                })
            } else {
                res.status (401).json ({ msg: "Invalid Password"})
            }
        }
    }).catch (err => {
        res.status(500).json(err);
    })
};


module.exports = AuthController