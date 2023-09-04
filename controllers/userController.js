const models = require("../models/index");
const bcrypt = require('bcrypt');
const { User } = models;
const { encryptPasswordService2 } = require("../services/authServices");
require("dotenv").config();

const getMyProfile = async (req, res) => {
  try {
    const myProfile = await User.findOne({
      where: {
        id: req.auth.user.id,
      },
    });
    res.json({ message: "Profile Area", myProfile });
  } catch (error) {
    console.error(error);
    console.log(req.auth, "holaaaaaa");
    return res.status(500).json({ error: "Error Profile Access" });
  }
};

const updateMyProfile = async (req, res) => {
  try {
    const profile = req.body;
    const editedProfile = await User.update(
      {
        name: profile.name,
        surname: profile.surname,
        address: profile.address,
      },
      {
        where: { email: req.auth.user.email },
      }
    );
    res.json({message: "User has been updated", editedProfile});
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Cant update the user profile"})
  }
};

const editMyPassword = async (req,res) => {
  try {
    const {currentPassword, newPassword, email} = req.body;
    console.log(req.body, "que pasa con tu body")
    if (!currentPassword || !newPassword || !email) {
      return res.status(400).json({ error: "Mandatory data missing"});
    }

    const user = await User.findOne({
      where: {email}
    });
    if (!user) {
      return res.status(404).json({ error: "User not found"})
    }
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({error: "Incorrect password"})
    }

    const hashedPassword = await encryptPasswordService2(newPassword);
    await User.update(
      {
        password : hashedPassword,
    },
    {
      where: {email},      
    }
    );
    res.json({
      message: "Password updated with success"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Error during the update"})
  }
};

module.exports = {
  getMyProfile,
  updateMyProfile,
  editMyPassword,
};
