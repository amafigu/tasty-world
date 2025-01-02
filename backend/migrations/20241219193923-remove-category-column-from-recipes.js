'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('recipes', 'category')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('recipes', 'category', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },
}
