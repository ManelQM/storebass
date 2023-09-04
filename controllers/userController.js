const models = require("../models/index");
const bcrypt = require("bcrypt");
const { User } = models;
const { encryptPasswordService2 } = require("../services/authServices");
require("dotenv").config();

// PROFILE ACCES BY USER

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

// UPDATE USER PROFILE 

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
    res.json({ message: "User has been updated", editedProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Cant update the user profile" });
  }
};

// EDIT USER PASSWORD 

const editMyPassword = async (req, res) => {
  try {
    const { currentpassword, newpassword, email } = req.body;
    if (!currentpassword || !newpassword || !email) {
      return res.status(400).json({ error: "Mandatory data missing" });
    }
    const user = await User.findOne({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(
      currentpassword,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    const hashedPassword = await encryptPasswordService2(newpassword);
    await User.update(
      {
        password: hashedPassword,
      },
      {
        where: { email },
      }
    );
    res.json({
      message: "Password updated with success",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error during the update" });
  }
};

module.exports = {
  getMyProfile,
  updateMyProfile,
  editMyPassword,
};
