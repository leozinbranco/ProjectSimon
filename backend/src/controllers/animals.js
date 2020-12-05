const knex = require('../database/connections');
const moment = require('moment');
const Joi = require('joi');
moment.locale('br');

const animalSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().required(),
    breed: Joi.string().max(30).required(),
    color: Joi.string().max(30).required(),
    description: Joi.string().max(200).required(),
    available_for_adoption: Joi.string().max(1).required(),
    available_for_patronize: Joi.string().max(1).required(),
    gender: Joi.string().max(1).required(),
    type_id: Joi.number().integer().min(1).required(),
    ong_id: Joi.number().integer().min(1).required(),
    image_url: Joi.string().required()
})

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
                image_url
            } = request.body;  //dados do animal


            try {
                const value = await animalSchema.validateAsync(params);
                console.log(value)
            }
            catch (err) { 
                console.log(err.details[0])
                return response.status(500).json({message: `Erro no campo ${err.details[0].context.key}`, validation_messagge: err.details[0].message});

            }

            params.register_date = moment().format().toString()
            console.log(params)

            const ret = await knex('animals')
            .returning(['id', ' name'])
            .insert(params);

            return response.json({success: true, ret})

        } catch (error) {
            console.log(error);
            return response.status(500).json(error)
        }

    }
}