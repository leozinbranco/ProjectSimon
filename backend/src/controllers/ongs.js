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
    async index (request, response){
        const ongs = await knex('ongs').select('*');
    
        return response.json(ongs);  //obj criado da select feita 
    },

    async show (request, response) {
        const { id } = request.params

        const ong = await knex('ongs').select('*').where('id', id).first();

        if (!ong)
            return response.status(400).json({message: 'Ong not found'})

        return response.json(ong)
    },


    async create(request, response){
                //requisição e resposta
                try{

                    const params = {
                        company_name, 
                        name, 
                        email, 
                        password, 
                        whatsapp,
                        cep,
                        number,
                        cnpj,
                        born_date,
                    } = request.body;  //dados do corpo 
            
                    params.register_date =  moment().format().toString()

                    const ret = await knex('ongs')
                    .returning(['id',' company_name'])
                    .insert(params)
                    return response.json({ret});   

                }catch(error)
                {
                    console.log(error);
                    return response.status(500).json({server_error: JSON.stringify(error)})

                }

    }
}