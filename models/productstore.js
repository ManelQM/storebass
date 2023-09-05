"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Productstore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Productstore.hasMany(models.Orders, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Amps, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Books, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Cabinets, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Cables, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Cases, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Newbasses, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Pedals, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Picks, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Pickups, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Straps, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Strings, {
        foreignKey: "productstoreid",
      });
      Productstore.hasOne(models.Vintagebasses, {
        foreignKey: "productstoreid",
      });
    }
  }
  Productstore.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Productstore",
    }
  );
  return Productstore;
};
