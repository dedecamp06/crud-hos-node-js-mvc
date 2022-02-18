const Sequelize = require('sequelize');

class Speciality extends Sequelize.Model {
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
                tableName: 'Speciality',
                timestamps: false,
            }
        );

        return this;
    }

    static associate(models) {
        this.hasMany(models.Doctors, {
            foreignKey: 'id_specialty'
        });


    }
}

module.exports = Speciality;
