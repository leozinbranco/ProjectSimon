knex = require('../database/connections');
const moment = require('moment');
moment.locale('br');

module.exports = {
    async index (request, response){
        const reports = await knex('reports').select('*');

        return response.json(reports);
    },

    async show (request, response) {
        const { id } = request.params

        const report = await knex('reports').select('*').where('id', id).first();

        if (!report)
            return response.status(400).json({message: 'Report not found'})

        return response.json(report)
    },

    async create (request, response){
        try{
            const params = {
                title,
                desc,
                register_date,
                id_animal_type,
                status,
                map_long,
                map_lati,
                priority
            } = request.body; 

            params.register_date = moment().format().toString();

            const ret = await knex('reports')
            .returning(['id','title'])
            .insert(params);

            return response.json(ret);
        }
        catch(err)
        {
            console.log(err);
        }
    }
}