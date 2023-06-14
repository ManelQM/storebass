'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orders.belongsTo(models.user,{
        foreignKey: "id_user",
       });
      orders.belongsTo(models.productstore, {
        foreignKey: "id_productstore",
       });
    }
  }
  orders.init({
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    id_productstore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "productstore",
        key: "id_productstore", 
      },
    },
    
    id_user: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id_user",
      }
    },
    ships: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};