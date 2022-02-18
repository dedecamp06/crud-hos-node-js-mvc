'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Speciality', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Name: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Speciality')
  }
};
