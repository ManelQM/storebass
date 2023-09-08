"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cartproduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cartproduct.belongsTo(models.Cart, {
        foreignKey: "cartid",
      });
      Cartproduct.belongsTo(models.Productstore, {
        foreignKey: "productstoreid",
      });
    }
  }
  Cartproduct.init(
    {
      // Cartid: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "Cart",
      //     key: "id",
      //   },
      // },
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
      modelName: "Cartproduct",
    }
  );
  return Cartproduct;
};
