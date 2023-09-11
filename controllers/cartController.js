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
    // console.log(productstore, "aquiiiiiiii");

    if (!productstore || productstore.stock < quantity) {
      // console.log(productstore, "PRODUCTSTOCK")
      return res.status(400).json({ error: "This product is sold out" });
    }
    const cartproduct = await Cartproduct.create({
      Cartid: cart.id,
      productstoreid,
      quantity,
    });
    console.log(cartproduct, "cart")
    // if (!cartproduct) {
    //   return res.status(404).json({ error: "Cart not found" });
    // }
    productstore.stock -= quantity;
    await productstore.save();
    res.status(201).json({ message: `${Productstore.name},Added to Cart` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cant add product" });
  }
};

module.exports = {
  addProductToCart,
};
