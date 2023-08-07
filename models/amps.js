'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Amps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Amps.belongsTo(models.Productstore, {
      foreignKey: "Productstoreid",
     });
    }
  }
  Amps.init({
    // id_amp: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,

    // },
    productstoreid: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: "Productstore",
        key: "id",
      },
    },
    name: {
      type:DataTypes.STRING,
    },
    description: {
      type:DataTypes.STRING,
    },
    setup: {
      type:DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Amps',
  });
  return Amps;
};