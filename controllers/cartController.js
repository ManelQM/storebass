const models = require("../models/index");

const {Cart ,Cartproduct, Productstore,User } = models; 


const addProductToCart = async (req,res) => {
    console.log (req,"la req")
    try{
        const {productid, quantity} = req.body;
        const userid = req.auth.id;
        
        console.log(req.auth.id, "Que me traes¿?¿?¿?¿?");
        let cart = await Cart.findOne({
            where: {
                userid
            },
        });

        if (!cart) {
            cart = await Cart.create({userid});
        }

        const productstore = await Productstore.findByPk(productid);

        if(!productstore || productstore.stock < quantity) {
            return res.status(400).json({error: "This product is sold out"})
        }
        const cartproduct = await Cartproduct.create({
            cartid: cart.id,
            productid,
            quantity,
        });
        
        productstore.stock -= quantity;
        await productstore.save()
        res.status(201).json({message: `${Productstore.name},Added to Cart`});
        
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Cant add product"});
    }
};

module.exports = {
    addProductToCart,
}