const ClientsModel = require('../models/clientsModel')

class ClientService {

    async returnClients() {
        try {
            const result = await ClientsModel.findAll()
            const response = {
                result,
                statuscode: 200
            }
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }

    async insertClients(params) {
        try {
            const insert = {
                Name: params.Name,
                Date: params.Date,
                Address: params.Address,
                Sex: params.Sex,
                Phone: params.Phone,
                Mail: params.Mail
            }
            const result = await ClientsModel.create(insert);
            const response = {
                result,
                statuscode: 200
            }
            return response
        } catch (error) {
            throw new Error(error)
        }
    }

    async findById(params) {
        try {
            const result = await ClientsModel.findOne({
                where: {
                    id: params
                }
            });
            const response = {
                result,
                statuscode: 200
            }
            return response
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateClients(params) {
        try {
            const { id } = params
            delete params.id
            const result = await ClientsModel.update(params, {
                where: {
                    id
                }
            })
            const response = {
                result,
                statuscode: 200
            }
            return response
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteClients(params) {
        try {
            const result = await ClientsModel.destroy({
                where: {
                    id: params.id
                }
            });

            const response = {
                result,
                statuscode: 200
            }
            return response
        } catch (error) {
            console.error("error", error)
            throw new Error(error)
        }
    }
}

module.exports = new ClientService();