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
      productstore.hasMany(models.orders);
      productstore.hasOne(models.amps);
      productstore.hasOne(models.books);
      productstore.hasOne(models.cabinets);
      productstore.hasOne(models.cables);
      productstore.hasOne(models.cases);
      productstore.hasOne(models.newbasses);
      productstore.hasOne(models.pedals);
      productstore.hasOne(models.picks);
      productstore.hasOne(models.pickups);
      productstore.hasOne(models.straps);
      productstore.hasOne(models.strings);
      productstore.hasOne(models.vintagebasses);
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