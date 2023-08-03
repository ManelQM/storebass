'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cables.belongsTo(models.productstore, {
        foreignKey: "productstoreid",
       });
    }
  }
  cables.init({
    // id_cable: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },

    productstoreid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references : {
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
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'cables',
  });
  return cables;
};