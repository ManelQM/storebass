'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.User,{
        foreignKey:"userid"
      });
      Cart.belongsToMany(models.Productstore, {
        through: "Cartproduct",
        foreignKey:"CartId"
      });
    }
  }
  Cart.init({
    userid: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      }
    },
    quantity: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: "Cart",
  });
  return Cart;
};