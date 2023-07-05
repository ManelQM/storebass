"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          id_user: 1,
          id_role: 1,
          email: "mradmin@fakemail.com",
          password: bcrypt.hashSync(
            "Manel12345",
            Number.parseInt(authConfig.rounds)
          ),
          name: "Mr.Admin",
          surname: "iseeyou",
          address: "mordor",
        },
        {
          id_user: 2,
          id_role: 2,
          email: "pastorius@fakemail.com",
          password: bcrypt.hashSync(
            "jaco12345",
            Number.parseInt(authConfig.rounds)
          ),
          name: "Jaco",
          surname: "Pastorius",
          address: "Norristown",
        },
        {
          id_user: 3,
          id_role: 2,
          email: "miller@fakemail.com",
          password: bcrypt.hashSync(
            "marcus12345",
            Number.parseInt(authConfig.rounds)
          ),
          name: "Marcus",
          surname: "Miller",
          address: "Brooklyn",
        },
        {
          id_user: 4,
          id_role: 2,
          email: "harris@fakemail.com",
          password: bcrypt.hashSync(
            "steve12345",
            Number.parseInt(authConfig.rounds)
          ),
          name: "Steve",
          surname: "Harris",
          address: "London",
        }
        {
          id_user: 5,
          id_role: 2,
          email: "lee@fakemail.com",
          password: bcrypt.hashSync(
            "geddy12345",
            Number.parseInt(authConfig.rounds)
          ),
          name: "Geddy",
          surname: "Lee",
          address: "Toronto",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {});
  },
};
