"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: "roleid",
      });
      User.hasMany(models.Orders, {
        constraints: false,
        foreignKey: "userid",
      });
      User.hasOne(models.Cart,{
        constraints: false,
        foreignKey: "userid",
      });
    }
  }
  User.init(
    {
      roleid: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        references: {
          model: "Role",
          key: "id",
        },
      },

      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      surname: {
        type: DataTypes.STRING,
        // allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        // allowNull: false,
      },

      postalcode: {
        type: DataTypes.STRING,
        // allowNull: false,
      },

      city: {
        type: DataTypes.STRING,
        // allowNull: false,
      },

      country: {
        type: DataTypes.STRING,
        // allowNull: false,
      },

      movilephone : {
        type: DataTypes.STRING,
        // allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
