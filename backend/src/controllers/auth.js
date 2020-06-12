knex = require('../database/connections');

module.exports = {

    async authenticate(request, response) {
        const { email, password } = request.body;

        let auth = await knex('users').select('*').where({
            email,
            password,  //Necessario criptografar 
        }).first();

        if (!auth)
            auth = await knex('ongs').select('*').where({
                email,
                password,  //Necessario criptografar 
            }).first();

        if (!auth)
            return response.status(400).json({ message: 'Invalid login/ not found' })

        return response.json(auth);
    }

}