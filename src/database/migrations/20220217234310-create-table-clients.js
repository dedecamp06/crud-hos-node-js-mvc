'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Clients', {
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
      Date: {
        type: Sequelize.STRING,
        allowNull: true
      },
      Address: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      Sex: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Phone: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      Mail: {
        type: Sequelize.STRING(250),
        allowNull: true
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Clients')
  }
};
