const models= require("../models/index"); 
const { User } = models; 
const {encryptPasswordService} = require ("../services/authServices");  
require("dotenv").config();


const getMyProfile = async (req,res) => {
    try{
        const myProfile = await User.findOne({
            where: {
                userid : req.auth.id
            }
        });
        res.json({message: "Profile Area", myProfile})
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Error Profile Access"})
    }
}; 


module.exports = {
    getMyProfile
}

 