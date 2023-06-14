'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_productstore: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "productstore",
          key: "id_productstore",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id_user", 
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      ships: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};