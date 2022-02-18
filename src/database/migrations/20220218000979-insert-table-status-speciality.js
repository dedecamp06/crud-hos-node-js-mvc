'use strict'


module.exports = {
    up: async (queryInterface) => {
        const transaction = await queryInterface.sequelize.transaction()
        try {
            await queryInterface.sequelize.query(
                ` INSERT INTO Speciality(Name) VALUES('ClínicoGeral'),('Cardiologia'),('Neurologista')
                  INSERT INTO Status(Name) values('Executando'),('Pendente'),('Finalizado')`,
                transaction);
            await transaction.commit()
        } catch (error) {
            await transaction.rollback()
            throw error
        }

    },

    down: async (queryInterface) => {
        const transaction = await queryInterface.sequelize.transaction()
        try {
            await transaction.commit()
        } catch (error) {
            await transaction.rollback()
            throw error
        }
    }
}