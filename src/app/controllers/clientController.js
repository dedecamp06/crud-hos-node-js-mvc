const ClientService = require('../services/clientService')

class ClientController {

    async get(req, res) {
        try {
            const resultado = await ClientService.returnClients();
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getParam(req, res) {
        try {
            const { id } = req.params
            const resultado = await ClientService.findById(id);
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async post(req, res) {
        try {
            const resultado = await ClientService.insertClients(req.body)
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async put(req, res) {
        try {
            const { id } = req.params
            const resultado = await ClientService.updateClients({ ...req.body, id })
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async delete(req, res) {
        try {
            const resultado = await ClientService.deleteClients(req.params)
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = new ClientController()