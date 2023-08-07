'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productstore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Productstore.hasMany(models.orders, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.amps, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.books, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.cabinets, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.cables, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.cases, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.newbasses, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.pedals, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.picks, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.pickups, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.straps, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.strings, {
        foreignKey: "productstoreid",
       });
      Productstore.hasOne(models.vintagebasses, {
        foreignKey: "productstoreid",
       });
    }
  }
  Productstore.init({
 
    name: {
      type:DataTypes.STRING,
      allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'Productstore',
  });
  return Productstore;
};