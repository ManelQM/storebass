'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productstore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productstore.hasMany(models.orders, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.amps, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.books, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.cabinets, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.cables, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.cases, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.newbasses, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.pedals, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.picks, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.pickups, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.straps, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.strings, {
        foreignKey: "id_productstore",
       });
      productstore.hasOne(models.vintagebasses, {
        foreignKey: "id_productstore",
       });
    }
  }
  productstore.init({
    id_productstore: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
      allowNull: false,
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'productstore',
  });
  return productstore;
};