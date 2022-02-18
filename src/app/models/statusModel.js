const Sequelize = require('sequelize');

class Status extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    primaryKey: true,
                    type: Sequelize.NUMBER,
                    autoIncrement: true,
                },
                Name: Sequelize.STRING,
            },
            {
                sequelize,
                force: true,
                tableName: 'Status',
                timestamps: false,
            }
        );

        return this;
    }
}

module.exports = Status;
