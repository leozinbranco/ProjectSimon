const knex = require('knex');
const configuration = require('../../knexfile');  //'../' significa voltar uma pasta 

const connection = knex(configuration.dev);

module.exports = connection;