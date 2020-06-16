

const express = require('express');
//const { celebrate, Segments, Joi} = require('celebrate');
const routes = express.Router();  //modulo de rotas em uma nova variável, no lugar de app.
const pagSeguro = require('./controllers/pagseguro');
const ongController = require('./controllers/ongs');
const usersController = require('./controllers/users');
const animalsController = require('./controllers/animals');
const animals_typesController = require('./controllers/animals_types');
const ong_bank_data = require('./controllers/ong_bank_data');
const reports = require('./controllers/reports');
const authController = require('./controllers/auth')

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

/*               */



routes.post('/pagSeg', pagSeguro.connect); 

routes.post('/ongs', ongController.create);

routes.get('/ongs', ongController.index);

routes.get('/ongs/:id', ongController.show);

/*               */

routes.post('/users', usersController.create);

routes.get('/users', usersController.index);

routes.get('/users/:id', usersController.show);


/*               */

routes.post('/animals', animalsController.create);

routes.get('/animals', animalsController.index);

routes.get('/animals/:id', animalsController.show);

/*               */

routes.post('/animals_types', animals_typesController.create);

routes.get('/animals_types', animals_typesController.index);

/*               */

routes.post('/reports', reports.create);

routes.get('/reports', reports.index);

routes.get('/reports/:id', reports.index);


/*               */

routes.post('/ong_bank_data', ong_bank_data.create);

routes.get('/ong_bank_data', ong_bank_data.index);

routes.get('/ong_bank_data/:id_ong', ong_bank_data.index);


/*               */

routes.get('/auth', authController.authenticate);

/*               */

routes.post('/user_bank_data', ong_bank_data.create);

routes.get('/user_bank_data', ong_bank_data.index);

routes.get('/user_bank_data/:id_user', ong_bank_data.index);


module.exports = routes;
