knex = require('../database/connections');
const moment = require('moment');
moment.locale('br');
/*
get: buscar alguma inf no backend
post: criar alguma inf no backend
put: alterar alguma inf no backend
delete: deletar alguma inf no backend
*/

module.exports = {
    async index(request, response) {

        const { limit } = request.query // ou const limit = request.query.limit

        const animals = await knex.select(['animals.*', 'ongs.company_name']).table('animals').innerJoin('ongs', 'ongs.id', 'animals.ong_id');


        /*
        select a.*, o.company_name as ongName from animals as a 
        inner join ongs as o 
        on o.id = a.ong_id 
        */
        return response.json(animals);  //obj criado da select feita 
    },

    async show(request, response) {
        const { id } = request.params

        const animal = await knex('animals').select('*').where('id', id).first();

        if (!animal)
            return response.status(400).json({ message: 'Animal not found' })

        return response.json(animal)
    },

    async create(request, response) {

        try {

            const params = {
                name,
                born_date,
                breed,
                color,
                description,
                available_for_adoption,
                available_for_patronize,
                type_id,
                ong_id,
            } = request.body;  //dados do animal

            params.register_date = moment().format().toString()
            console.log(params)

            const ret = await knex('animals')
                .returning(['id', ' name'])
                .insert(params);

            return response.json(ret);

        } catch (error) {
            console.log(error);
        }

    }
}