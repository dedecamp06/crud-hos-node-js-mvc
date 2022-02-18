const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const Clients = require('../app/models/clientsModel');
const Doctors = require('../app/models/doctorsModel');
const Speciality = require('../app/models/specialityModel');
const Schedule = require('../app/models/scheduleModel');
const Status = require('../app/models/statusModel')

const models = [
    Clients,
    Doctors,
    Speciality,
    Schedule,
    Status

];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

module.exports = new Database();
