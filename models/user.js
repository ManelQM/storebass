'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsTo(models.role);
      user.hasMany(models.orders); 
    }
  }
  user.init({
    id_user: {
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true

    },

    id_role: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      references: {
        model: "roles",
        key: "id_role",
      }
    },

    email: {  
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
  },
    password: {  
      type: DataTypes.STRING,
      allowNull: false 
    },

    name: {
      type:DataTypes.STRING,
      allowNull: false 
    },

    surname: {
      type: DataTypes.STRING,
    },

    address: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};