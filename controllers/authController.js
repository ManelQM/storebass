const {User} = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 
const authConfig = require("../config/auth");
const auth = require("../config/auth");

const AuthController = {}; 

// LOGIN 
AuthController.login = (req, res) => {
    let { email, password } = req.body; 
    //Search User
    User.findOne ({where: {email: email }
    }).then(user => {
        if (!user) {
            res.status(404).json({msg : "User not found"})
        } else {
            // TALES FROM THE ENCRYPT
            if (bcrypt.compareSync(password, user.password)) {
                // THE CREATION OF THE TOKEN
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

//REGISTER 

AuthController.register = (req, res)=> {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    //CREAR USUARIO

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: password

    }).then(user => {

        //THE CREATION OF THE TOKEN
        let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires
        });
        
        res.json({
            user: user,
            token: token
        });

    }).catch(err => {
        res.status(500).json(err);

    });
};


module.exports = AuthController