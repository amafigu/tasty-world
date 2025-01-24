'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.addColumn('recipes', 'people_to_serve', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1, 
    });

     await queryInterface.addColumn('recipes', 'difficulty_level', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('recipes', 'people_to_serve')
    await queryInterface.removeColumn('recipes', 'difficulty_level')
  }
};
