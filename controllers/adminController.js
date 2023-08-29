const models = require("../models/index");
const { User } = models;
const { Productstore } = models;
require("dotenv").config();

const bringAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({});
    res.json({ message: "Users list", users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

const bringAllStore = async (req, res) => {
  try {
    const pstore = await Productstore.findAll({});
    res.json({ message: "Store list of products", pstore });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const email = req.body.email;
    const deleteThisUser = await User.findOne({
      where: {
        email: email,
      },
    });
    if (deleteThisUser.roleid === 1) {
      res.json({
        message: "Untouchable Admin",
      });
    } else {
      User.destroy({
        where: {
          email: email,
        },
      });
      res.json({
          message: "User deleted from the database",
        });
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteProduct = async (req,res) => {
  try {
    const productName = req.body.name; 
    const deleteThisProduct = await Productstore.findOne ({
      where: {
        name : productName,
      },
    }); 
    if (!deleteThisProduct) {
      return res.status(404).json({message: "Product not found in the store"});
    } else {
      await deleteThisProduct.destroy();
      res.status(200).json({ message: "Product deleted with success"});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server Error"})
  }
};

module.exports = {
  bringAllUsers,
  bringAllStore,
  deleteUser,
  deleteProduct
};
