const routes = require('express').Router();
const cors = require('cors');
const ClientController = require('./app/controllers/clientController');
const DoctorController = require('./app/controllers/doctorController');
const ScheduleController = require('./app/controllers/ScheduleController')

routes.use(cors());

//clients routes
routes.get('/client', ClientController.get)
routes.get('/client/:id', ClientController.getParam)
routes.post('/client', ClientController.post)
routes.put('/client/:id', ClientController.put)
routes.delete('/client/:id', ClientController.delete)

//doctor routes
routes.get('/doctor', DoctorController.get)
routes.get('/doctor/:id', DoctorController.getParam)
routes.post('/doctor', DoctorController.post)
routes.put('/doctor/:id', DoctorController.put)
routes.delete('/doctor/:id', DoctorController.delete);

//schedules routes
routes.get('/schedule', ScheduleController.get)
routes.get('/schedule/:id', ScheduleController.getParam)
routes.post('/schedule', ScheduleController.post)
routes.put('/schedule/:id', ScheduleController.put)
routes.delete('/schedule/:id', ScheduleController.delete);
module.exports = routes