'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Schedule', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      Date: {
        type: Sequelize.STRING,
        allowNull: true
      },
      Hour: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      id_client: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'Clients' },
          key: 'id',
        },
      },
      id_doctor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'Doctors' },
          key: 'id',
        },
      },
      id_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: 'Status' },
          key: 'id',
        },
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Schedule')
  }
};
