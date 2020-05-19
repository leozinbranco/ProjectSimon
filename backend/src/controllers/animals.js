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
        const animals = await knex('animals').select('*');
    
        return response.json(animals);  //obj criado da select feita 
    },


    async create(request, response){
                //requisição e resposta
                
        try{



            const params = {
                name, 
                born_date, 
                email, 
                color, 
                description,
                avaible,
                type_id,
                ong_id,    
                bio,
            } = request.body;  //dados do corpo 
            //console.log(data);
            
        // const id = crypto.randomBytes(4).toString('HEX');
            //id random criado
            params.register_date =  moment().format().toString()
            //console.log(params);

            const ret = await knex('animals')
            .returning(['id',' name'])
            .insert(params);

            return response.json(ret);   

        }catch(error)
        {
            console.log(error);
        }

    }
}