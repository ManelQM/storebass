const models = require("../models/index");
const { Cart, Cartproduct, Productstore, User } = models;

const addProductToCart = async (req, res) => {
  try {
    const { productstoreid, quantity } = req.body;
    const userid = req.auth.user.id;

    let cart = await Cart.findOne({
      where: {
        userid,
      },
    });

    if (!cart) {
      cart = await Cart.create({ userid });
    }

    const productstore = await Productstore.findByPk(productstoreid);

    if (!productstore || productstore.stock < quantity) {
      return res.status(400).json({ error: "This product is sold out" });
    }
    const cartproduct = await Cartproduct.create({
      CartId: cart.id,
      productstoreid,
      quantity,
    });
   
    if (!cartproduct) {
      return res.status(404).json({ error: "Cart not found" });
    }
    productstore.stock -= quantity;
    await productstore.save();
    res.status(201).json({ message: `${productstore.name}, added to Cart` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cant add product" });
  }
};

module.exports = {
  addProductToCart,
};
