'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cartproducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cartid: {
        // allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Carts",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      productstoreid: {
        type: Sequelize.INTEGER,
        references: {
          model: "Productstores",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
     
      quantity: {
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
    await queryInterface.dropTable('Cartproducts');
  }
};