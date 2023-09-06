const models = require("../models/index");
const {Cart ,Cartproduct, Productstore } = models; 


const addProductToCart = async (req,res) => {
    try{
        const {productId, quantity} = req.body;
        const userId = req.auth.id;

        let cart = await Cart.findOne({
            where: {
                userId
            },
        });

        if (!cart) {
            cart = await Cart.create({userId});
        }

        const productstore = await Productstore.findByPK(productId);

        if(!productstore || productstore.stock < quantity) {
            return res.status(400).json({error: "This product is sold out"})
        }
        const cartproduct = await Cartproduct.create({
            cartId: cart.id,
            productId,
            quantity,
        });
        
        productstore.stock -= quantity;
        await productstore.save
        res.status(201).json({message: `${Productstore.name},Added to Cart`});
        
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Cant add product"});
    }
};

module.exports = {
    addProductToCart,
}