"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Productstores",
      [
        {
          name: "Orange AD200 MK III",
          category: "Amps",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Modern Electric Bass",
          category : "Books",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Orange OD4x10",
          category: "Cabinets",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Monster Cable 21A",
          category: "Cables",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fender rigid bass case",
          category: "Cases",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dingwall NG3 4 Strings",
          category: "Newbasses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Morley PFW2 Classic Power Fuzz Wah",
          category: "Pedals",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dava Grip Tip Nylon Picks Set",
          category: "Picks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sadowsky Onboard Bass Preamp (4-Knob System)",
          category: "Pickups",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Minotaur Bass Strap Black",
          category: "Straps",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rotosound Steve Harris SH77",
          category: "Strings",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name:"Fender Jazz Bass 72",
          category: "Vintagebasses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Productstores', null, {});
     
  },
};
