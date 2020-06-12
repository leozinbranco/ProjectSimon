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
        const users = await knex('users').select('*');
    
        return response.json(users);  //obj criado da select feita 
    },

    async show (request, response) {
        const { id } = request.params

        const user = await knex('users').select('*').where('id', id).first();

        if (!user)
            return response.status(400).json({message: 'User not found'})

        return response.json(user)
    },


    async create(request, response){
                //requisição e resposta            
        try{
        
            const params = {
                name, 
                email, 
                password, 
                whatsapp,
                cep,
                born_date,     
                bio,
            } = request.body;  //dados do corpo 
            //console.log(data);
            
        // const id = crypto.randomBytes(4).toString('HEX');
            //id random criado
            params.register_date =  moment().format().toString()
            //console.log(params);
            
                const ret = await knex('users')
                .returning(['id',' name'])
                .insert(params);
            
            return response.json(ret);   

        }catch(error)
        {
            console.log(error);
        }

    }
}