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
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.amps, {
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.books, {
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.cabinets, {
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.cables, {
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.cases, {
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.newbasses, {
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.pedals, {
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.picks, {
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.pickups, {
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.straps, {
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.strings, {
        foreignKey: "productstoreid",
       });
      productstore.hasOne(models.vintagebasses, {
        foreignKey: "productstoreid",
       });
    }
  }
  productstore.init({
    // productstoreid: {
    //   type:DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey:true,
    //   allowNull: false,
    // },
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