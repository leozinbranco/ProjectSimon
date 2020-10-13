knex = require('../database/connections');
const moment = require('moment');
moment.locale('br');

module.exports = {
    async index (request, response){
        const ong_bank_data = await knex('ong_bank_data').select('*');

        return response.json(ong_bank_data);
    },

    async show (request, response){
        const { id_ong } = request.params

        const bank_data = await knex('ong_bank_data').select('*').where('id_ong', id_ong).first();

        if (!bank_data)
            return response.status(400).json({message: 'Bank data not found'})

        return response.json(bank_data)
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