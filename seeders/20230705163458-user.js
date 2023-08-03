"use strict";
const bcrypt = require("bcrypt");
const authConfig = require("../config/auth");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          
          roleid: 1,
          email: "mradmin@fakemail.com",
          password: bcrypt.hashSync(
            "Manel12345",
            Number.parseInt(authConfig.rounds)
          ),
          name: "Mr.Admin",
          surname: "iseeyou",
          address: "mordor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          roleid: 2,
          email: "pastorius@fakemail.com",
          password: bcrypt.hashSync(
            "jaco12345",
            Number.parseInt(authConfig.rounds)
          ),
          name: "Jaco",
          surname: "Pastorius",
          address: "Norristown",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          roleid: 2,
          email: "miller@fakemail.com",
          password: bcrypt.hashSync(
            "marcus12345",
            Number.parseInt(authConfig.rounds)
          ),
          name: "Marcus",
          surname: "Miller",
          address: "Brooklyn",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          roleid: 2,
          email: "harris@fakemail.com",
          password: bcrypt.hashSync(
            "steve12345",
            Number.parseInt(authConfig.rounds)
          ),
          name: "Steve",
          surname: "Harris",
          address: "London",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
         
          roleid: 2,
          email: "lee@fakemail.com",
          password: bcrypt.hashSync(
            "geddy12345",
            Number.parseInt(authConfig.rounds)
          ),
          name: "Geddy",
          surname: "Lee",
          address: "Toronto",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
