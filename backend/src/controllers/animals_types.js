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
        const animals_types = await knex('animals_types').select('*');
    
        return response.json(animals_types);  //obj criado da select feita 
    },


    async create(request, response){
                //requisição e resposta
                
        try{



            const params = {
                type_name
            } = request.body;  //dados do corpo 
            //console.log(data);
            
        // const id = crypto.randomBytes(4).toString('HEX');
            //id random criado
            //console.log(params);

            const ret = await knex('animals_types')
            .returning(['id',' type_name'])
            .insert(params);

            return response.json(ret);   

        }catch(error)
        {
            console.log(error);
        }

    }
}