knex = require('../database/connections');
const moment = require('moment');
moment.locale('br');

module.exports = {
    async index (request, response){
        const ong_bank_data = await knex('ong_bank_data').select('*');

        return response.json(ong_bank_data);
    },

    async create (request, response){

        try{
            const params = {
                id_ong,
                bank_code,
                agency_number,
                digit,
                account_type, 
                account_number, 
                account_digit, 
                company_name, 
                tel, 
                cnpj
            } = request.body;
    
            const ret = await knex('ong_bank_data')
            .returning(['id','cnpj'])
            .insert(params);
            return response.json({ret});
        }
        catch(err)
        {
            console.log(err);
        }
        
    }
}