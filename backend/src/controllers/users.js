knex = require('../database/connections');

/*
get: buscar alguma inf no backend
post: criar alguma inf no backend
put: alterar alguma inf no backend
delete: deletar alguma inf no backend
*/

module.exports = {
    async index (request, response){
        const ongs = await knex('users').select('*');
    
        return response.json(users);  //obj criado da select feita 
    },


    async create(request, response){
                //requisição e resposta
                
        const params = {
            id, 
            name, 
            email, 
            password, 
            whatsapp,
            cep,
        } = request.body;  //dados do corpo 
        //console.log(data);

       // const id = crypto.randomBytes(4).toString('HEX');
        //id random criado

        const ret = await knex('users')
        .returning(['id',' company_name'])
        .insert(params)

        return response.json(ret);   

    }
}