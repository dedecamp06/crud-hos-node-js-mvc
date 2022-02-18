const DoctorService = require('../services/doctorService')

class DoctorController {

    async get(req, res) {
        try {
            const resultado = await DoctorService.returnDoctors();
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getParam(req, res) {
        try {
            const { id } = req.params
            const resultado = await DoctorService.findById(id);
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async post(req, res) {
        try {
            const resultado = await DoctorService.insertDoctors(req.body)
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async put(req, res) {
        try {
            const { id } = req.params
            const resultado = await DoctorService.updateDoctors({ ...req.body, id })
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async delete(req, res) {
        try {
            const resultado = await DoctorService.deleteDoctors(req.params)
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = new DoctorController()