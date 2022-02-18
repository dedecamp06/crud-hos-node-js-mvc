const Sequelize = require('sequelize');

class Schedule extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    primaryKey: true,
                    type: Sequelize.NUMBER,
                    autoIncrement: true,
                },
                Date: Sequelize.STRING,
                Hour: Sequelize.STRING,
                id_client: {
                    type: Sequelize.NUMBER,
                    references: {
                        model: { tableName: 'Clients' },
                        key: 'id',
                    }
                },
                id_doctor: {
                    type: Sequelize.NUMBER,
                    references: {
                        model: { tableName: 'Doctors' },
                        key: 'id',
                    }
                },
                id_status: {
                    type: Sequelize.NUMBER,
                    references: {
                        model: { tableName: 'Status' },
                        key: 'id',
                    }
                },
            },
            {
                sequelize,
                force: true,
                tableName: 'Schedule',
                timestamps: false,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Clients, {
            foreignKey: 'id_client'
        });

        this.belongsTo(models.Doctors, {
            foreignKey: 'id_doctor'
        });

        this.belongsTo(models.Status, {
            foreignKey: 'id_status'
        });
    }
}

module.exports = Schedule;
