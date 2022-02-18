const ScheduleService = require('../services/scheduleService')

class ScheduleController {

    async get(req, res) {
        try {
            const resultado = await ScheduleService.returnSchedules();
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getParam(req, res) {
        try {
            const { id } = req.params
            const resultado = await ScheduleService.findById(id);
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async post(req, res) {
        try {
            const resultado = await ScheduleService.insertSchedules(req.body)
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async put(req, res) {
        try {
            const { id } = req.params
            const resultado = await ScheduleService.updateSchedule({ ...req.body, id })
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async delete(req, res) {
        try {
            const resultado = await ScheduleService.deleteSchedule(req.params)
            return res.status(resultado.statuscode).json(resultado)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = new ScheduleController()