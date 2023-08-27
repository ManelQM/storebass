const models = require("../models/index");
const { User } = models
require("dotenv").config();

const bringAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      // where: {
      //   roleid: 1,
      // },
    });
    res.json({ message: "Users list", users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  bringAllUsers,
};
