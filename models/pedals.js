'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pedals.belongsTo(models.productstore, {
        foreignKey: "id_productstore",
       }); 
    }
  }
  pedals.init({
    id_pedal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    id_productstore: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "productstore",
        key: "id_productstore",
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
    modelName: 'pedals',
  });
  return pedals;
};