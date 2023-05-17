'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('contacts', [
      {
        name: 'Ciro',
        phone: '351424253',
        date: new Date(),
        favourite: true,
        createdAt: new Date(),
        updatedAt: new Date()
     },{
      name: 'Federico',
      phone: '784365773',
      date: new Date(),
      favourite: false,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      name: 'Melisa',
      phone: '874587435',
      date: new Date(),
      favourite: true,
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('contacts', null, {});
    
  }
};
