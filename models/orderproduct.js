"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orderproduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orderproduct.belongsTo(models.Orders, {
        foreignKey: "orderid",
      });
      Orderproduct.belongsTo(models.Productstore, {
        foreignKey: "productstoreid",
      });
    }
  }
  Orderproduct.init(
    {
      orderid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Orders",
          key: "id",
        },
      },
      productstoreid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Productstore",
          key: "id",
        },
      },
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Orderproduct",
    }
  );
  return Orderproduct;
};
