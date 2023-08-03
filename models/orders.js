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
        foreignKey: "userid",
       });
      orders.belongsTo(models.productstore, {
        foreignKey: "productstoreid",
       });
    }
  }
  orders.init({
 
    productstoreid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "productstore",
        key: "id", 
      },
    },
    
    userid: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      }
    },
    ships: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};