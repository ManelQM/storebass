'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.User,{
        foreignKey: "userid",
       });
      Orders.belongsToMany(models.Productstore, {
        through:"Orderproduct",
        foreignKey: "orderid",
       });
    }
  }
  Orders.init({
 
    // productstoreid: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "Productstore",
    //     key: "id", 
    //   },
    // },
    
    userid: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      }
    },
    ships: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};