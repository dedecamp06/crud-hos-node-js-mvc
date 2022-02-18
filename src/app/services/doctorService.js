const DoctorsModel = require('../models/doctorsModel');
const SpecialityModel = require('../models/specialityModel')

class DoctorsService {

    async returnDoctors() {
        try {
            const result = await DoctorsModel.findAll({
                include: [
                    {
                        model: SpecialityModel,
                        attributes: ['Name']
                    }
                ]
            })
            const response = {
                result,
                statuscode: 200
            }
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }

    async insertDoctors(params) {
        try {
            const insert = {
                Name: params.Name,
                Sex: params.Sex,
                Phone: params.Phone,
                Mail: params.Mail,
                id_specialty: params.SpecialityId
            }
            const result = await DoctorsModel.create(insert);
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
            const result = await DoctorsModel.findOne({
                where: {
                    id: params
                },
                include: [
                    {
                        model: SpecialityModel,
                        attributes: ['Name']
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

    async updateDoctors(params) {
        try {
            const { id } = params
            delete params.id

            const result = await DoctorsModel.update(params, {
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

    async deleteDoctors(params) {
        try {
            const result = await DoctorsModel.destroy({
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

module.exports = new DoctorsService();