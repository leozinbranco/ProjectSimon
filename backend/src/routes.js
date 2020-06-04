const express = require('express');
//const { celebrate, Segments, Joi} = require('celebrate');
const routes = express.Router();  //modulo de rotas em uma nova variável, no lugar de app.

const ongController = require('./controllers/ongs');
const usersController = require('./controllers/users');
const animalsController = require('./controllers/animals');
const animals_typesController = require('./controllers/animals_types');
const ong_bank_data = require('./controllers/ong_bank_data');
const reports = require('./controllers/reports');
//const incidentController = require('./controllers/IncidentController');
//const profileController = require('./controllers/ProfileController');
//const sessionController = require('./controllers/SessionController');
//routes.get('/ongs',ongController.index);

// routes.post('/ongs', 
//     celebrate({
//     /*QUERY params, body params, route params*/
//         [Segments.BODY]: Joi.object().keys({
//             name: Joi.string().required(),
//             email: Joi.string().required().email(),
//             whatsapp: Joi.number().required().min(10).max(11),
//             city: Joi.string().required(),
//             uf: Joi.string().required().length(2),
//         })
//     })
// ongController.create);

routes.post('/ongs', ongController.create);

routes.get('/ongs', ongController.index);

routes.post('/users', usersController.create);

routes.get('/users', usersController.index);

routes.post('/animals', animalsController.create);

routes.get('/animals', animalsController.index);

routes.post('/animals_types', animals_typesController.create);

routes.get('/animals_types', animals_typesController.index);

routes.post('/reports', reports.create);

routes.get('/reports', reports.index);

routes.post('/ong_bank_data', ong_bank_data.create);

routes.get('/ong_bank_data', ong_bank_data.index);




module.exports = routes;
