'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {  
  await queryInterface.sequelize.query(`
      ALTER TABLE recipes
      ALTER COLUMN ingredients TYPE JSON USING ingredients::JSON;
    `);
    await queryInterface.sequelize.query(`
      ALTER TABLE recipes
      ALTER COLUMN instructions TYPE JSON USING instructions::JSON;
    `);
  },
  
  async down (queryInterface, Sequelize) {
  await queryInterface.sequelize.query(`
      ALTER TABLE recipes
      ALTER COLUMN ingredients TYPE TEXT USING ingredients::TEXT;
    `);
    await queryInterface.sequelize.query(`
      ALTER TABLE recipes
      ALTER COLUMN instructions TYPE TEXT USING instructions::TEXT;
    `);
  }
};
