const Sequelize = require('sequelize');

class Clients extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    primaryKey: true,
                    type: Sequelize.NUMBER,
                    autoIncrement: true,
                },
                Name: Sequelize.STRING,
                Date: Sequelize.STRING,
                Address: Sequelize.STRING(250),
                Sex: Sequelize.STRING(50),
                Phone: Sequelize.NUMBER,
                Mail: Sequelize.STRING(250)


            },
            {
                sequelize,
                force: true,
                tableName: 'Clients',
                timestamps: false,
            }
        );

        return this;
    }
}

module.exports = Clients;
