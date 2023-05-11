'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.bulkInsert('users', [
      {
        name: 'Federico',
        email: 'fede@gmail.com',
        pass: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      name: 'Juan',
      email: 'juan@gmail.com',
      pass: '1111',
      createdAt: new Date(),
      updatedAt: new Date()
  }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});
  }
};
