'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class newbasses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      newbasses.belongsTo(models.productstore, {
        foreignKey: "productstoreid",
       });
    }
  }
  newbasses.init({
    // id_newbass: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    productstoreid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "productstore",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    setup: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'newbasses',
  });
  return newbasses;
};