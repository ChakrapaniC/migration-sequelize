'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'peter',
        lastName: 'parker',
        email: 'parker@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'tony',
        lastName: 'stark',
        email: 'tony@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'jessy ',
        lastName: 'pinkman',
        email: 'jessy@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Users', null, {});
    },
  
};
