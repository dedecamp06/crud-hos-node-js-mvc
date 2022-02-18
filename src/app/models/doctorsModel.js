const Sequelize = require('sequelize');

class Doctors extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    primaryKey: true,
                    type: Sequelize.NUMBER,
                    autoIncrement: true,
                },
                Name: Sequelize.STRING,
                Sex: Sequelize.STRING(50),
                Phone: Sequelize.NUMBER,
                Mail: Sequelize.STRING(250),
                id_specialty: {
                    type: Sequelize.NUMBER,
                    references: {
                        model: { tableName: 'Speciality' },
                        key: 'id',
                    }
                },


            },
            {
                sequelize,
                force: true,
                tableName: 'Doctors',
                timestamps: false,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Speciality, {
            foreignKey: 'id_specialty'
        });
    }
}

module.exports = Doctors;
