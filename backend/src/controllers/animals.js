const knex = require('../database/connections');
const moment = require('moment');
const axios = require('axios');
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

        const animals = await knex.select(['animals.*', 'ongs.company_name', 'animals_types.type_name']).table('animals')
            .innerJoin('ongs', 'ongs.id', 'animals.ong_id')
            .innerJoin('animals_types', 'animals_types.id', 'animals.type_id').limit(limit || 100)


        return response.json(animals);

        //obj criado da select feita 
    },

    async show(request, response) {
        const { id } = request.params

        const animal = await knex('animals').select(['animals.*', 'ongs.company_name', 'animals_types.type_name']).where('animals.id', id)
            .innerJoin('ongs', 'ongs.id', 'animals.ong_id')
            .innerJoin('animals_types', 'animals_types.id', 'animals.type_id').first();

        if (!animal)
            return response.status(400).json({ message: 'Animal not found' })

        return response.json(animal)
    },

    async create(request, response) {

        try {

            const params = {
                name,
                age,
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

            await axios.get('https://dog.ceo/api/breeds/image/random')
                .then(async (result) => {
                    params.image_url = result.data.message

                    const ret = await knex('animals')
                        .returning(['id', ' name'])
                        .insert(params);

                    return response.json(ret);
                }).catch((err) => {
                    return response.status(500).json(err)
                })


        } catch (error) {
            console.log(error);
        }

    }
}