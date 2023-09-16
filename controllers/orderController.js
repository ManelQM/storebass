const models = require("../models/index");
const { Cart, Cartproduct, Productstore, Orders, Orderproduct } = models;

const makeOrder = async (req, res) => {
  try {
    const userid = req.auth.user.id;

    const cart = await Cart.findOne({
        // CartId:Cart.id,
      where: {
        userid,
      },
     
      include: {
        model: Cartproduct,
        as: "CartId",
        // required: true
      }
    });

    if (!cart) {
      return res.status(400).json({ error: "Cart not found" });
    }

    const order = await Orders.create({
      userid,
      ships: req.body.ships,
    });

    const productsInCart = cart.Cartproducts;
    for (const productInCart of productsInCart) {
      await Orderproduct.create({
        orderid: order.id,
        productstoreid: productInCart.productstoreid,
        quantity: productInCart.quantity,
      });
      const productstore = await Productstore.findByPk(
        productInCart.productstoreid
      );
      if (productstore) {
        productstore.stock -= productInCart.quantity;
        await productstore.save();
      }
    }
    res
      .status(201)
      .json({
        message:
          "Your order has been send to our headquarters, will be shipped in the next 24h. Thank your very much.",
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Cant make the order, please try again" });
  }
};

module.exports = {
  makeOrder,
};
