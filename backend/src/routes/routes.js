

const express = require('express');
//const { celebrate, Segments, Joi} = require('celebrate');
const routes = express.Router();  //modulo de rotas em uma nova variável, no lugar de app.
const pagSeguroRecurring = require('../controllers/pagseguroRecurring');
const ongController = require('../controllers/ongs');
const usersController = require('../controllers/users');
const animalsController = require('../controllers/animals');
const animals_typesController = require('../controllers/animals_types');
const ong_bank_data = require('../controllers/ong_bank_data');
const user_bank_data = require('../controllers/user_bank_data')
const reports = require('../controllers/reports');
const authController = require('../controllers/auth')
const pagSeguroTransfer = require('../controllers/pagSeguroTransfer');
const patronizeController = require('../controllers/patronize');
const paymentController = require('../controllers/paymentController');

const middleware = require('../middleware');



/*               */
routes.use(middleware);

routes.post('/pagseguro/auth', pagSeguroTransfer.authorization);

routes.post('/solicitation', pagSeguroTransfer.solicitationAuthAccount);

routes.get('/balance', pagSeguroTransfer.balance);

/* pagamento routes */

routes.get('/payments/checkout/:id/:email/:description/:amount', paymentController.checkout);
routes.get('/payments/success', () => {
    return res.render('success_screen')
});
routes.get('/payments/pending', () => {
    return res.render('pending_screen')
}); //se tiver pendente vem pra ca
routes.get('/payments/failure', () => {
    return res.render('failure_screen')
});


//routes.post('/session/:id', pagSeguroTransfer.session);

routes.post('/session', pagSeguroTransfer.session);

routes.post('/pagSegRec', pagSeguroRecurring.connect);

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

routes.get('/ong_bank_data/:id_ong', ong_bank_data.show);


/*               */

routes.post('/auth', authController.authenticate);

/*               */

routes.post('/user_bank_data', user_bank_data.create);

routes.get('/user_bank_data', user_bank_data.index);

routes.get('/user_bank_data/:id_user', user_bank_data.show);

routes.delete('/user_bank_data/:id', user_bank_data.delete);



/*               */

routes.post('/patronize', patronizeController.create);

routes.get('/patronize', patronizeController.index);

routes.get('/patronize/:id', patronizeController.show);

routes.get('/users/:id_user/patronize', patronizeController.getFromUser);

routes.put('/patronize/:id/deactivate', patronizeController.deactivate);


module.exports = routes;
