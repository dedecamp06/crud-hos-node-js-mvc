const ScheduleModel = require('../models/scheduleModel');
const ClientModel = require('../models/clientsModel')
const DoctorsModel = require('../models/doctorsModel');
const SpecialityModel = require('../models/specialityModel');
const StatusModel = require('../models/statusModel')

class ScheduleService {

    async returnSchedules() {
        try {
            const result = []

            const { count, rows } = await ScheduleModel.findAndCountAll({
                attributes: ['id', 'Date', 'Hour'],
                include: [
                    {
                        model: ClientModel,
                        attributes: ['id', 'Name']
                    },
                    {
                        model: DoctorsModel,
                        attributes: ['id', 'Name'],
                        include: {
                            model: SpecialityModel,
                        }
                    },
                    {
                        model: StatusModel
                    }

                ]
            });

            for (const clean of rows) {
                result.push({
                    id: clean.id,
                    date: clean.Date,
                    hour: clean.Hour,
                    clientName: clean.Client.Name,
                    clientId: clean.Client.id,
                    doctorName: clean.Doctor.Name,
                    doctorId: clean.Doctor.id,
                    doctorSpeciality: clean.Doctor.Speciality.Name,
                    status: clean.Status.Name
                })
            };

            const response = {
                count,
                result,
                statuscode: 200
            }
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }

    async insertSchedules(params) {
        try {
            const insert = {
                Date: params.Date,
                Hour: params.Hour,
                id_client: params.ClientId,
                id_doctor: params.DoctorId,
                id_status: params.StatusId
            }
            const result = await ScheduleModel.create(insert);
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
            const result = await ScheduleModel.findOne({
                where: {
                    id: params
                },
                include: [
                    {
                        model: ClientModel,
                        attributes: ['id', 'Name']
                    },
                    {
                        model: DoctorsModel,
                        attributes: ['id', 'Name'],
                        include: {
                            model: SpecialityModel,
                        }
                    },
                    {
                        model: StatusModel
                    }

                ]
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

    async updateSchedule(params) {
        try {
            const { id } = params
            delete params.id

            const result = await ScheduleModel.update(params, {
                where: {
                    id
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

    async deleteSchedule(params) {
        try {
            const result = await ScheduleModel.destroy({
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
            throw new Error(error)
        }
    }
}

module.exports = new ScheduleService();