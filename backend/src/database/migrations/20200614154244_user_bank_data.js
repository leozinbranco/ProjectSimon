
exports.up = function (knex) {
    return knex.schema.createTable('user_bank_data',
        function (table) {
            table.increments('id').primary();
            table.integer('id_user').notNullable().references('id').inTable('users');
            table.string('cardholder_name').notNullable(); //Titular
            table.string('card_number').notNullable();
            table.string('expires_date').notNullable();
            table.integer('cvv').notNullable();
            table.string('address_line_1').notNullable()
            table.string('address_line_2'); //Optional
            table.string('city').notNullable()
            table.string('state', 2).notNullable();
            table.string('cep').notNullable();
            table.string('country').notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable('user_bank_data');
};
