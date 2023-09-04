const models = require("../models/index");
const { User } = models;
const { encryptPasswordService } = require("../services/authServices");
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
    if (!currentPassword || newPassword || email) {
      return res.status(400).json({ error: "Mandatory data missing"});
    }

    const user = await User.findOne({
      where: {email}
    });
    if (!user) {
      return res.status(404).json({ error: "User not found"})
    }
  }
}
module.exports = {
  getMyProfile,
  updateMyProfile,
  editMyPassword,
};
