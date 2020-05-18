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


    async create(request, response){
                //requisição e resposta

                try{
                    //const register_date 

            
                    const  {
                        company_name, 
                        name, 
                        email, 
                        password, 
                        whatsapp,
                        cep,
                        number,
                        cnpj,
                        born_date,
                        register_date = moment().format().toString()
                    } = request.body;  //dados do corpo 
                    //console.log(data);
            
                   // const id = crypto.randomBytes(4).toString('HEX');
                    //id random criado
            
                    const ret = await knex('ongs')
                    .returning(['id',' company_name'])
                    .insert({company_name, 
                        name, 
                        email, 
                        password, 
                        whatsapp,
                        cep,
                        number,
                        cnpj,
                        born_date,
                        register_date})
                    return response.json(ret);   

                }catch(error)
                {
                    console.log(error);
                }
          

    }
}