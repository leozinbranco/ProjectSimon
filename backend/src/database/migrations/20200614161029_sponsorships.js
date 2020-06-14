
exports.up = function(knex) {
    return knex.schema.createTable('sponsorships', function (table){
        table.increments('id').primary();
        table.string('id_user').notNullable().references('id').inTable('users');
        table.string('id_user_bank_data').notNullable().references('id').inTable('user_bank_data');

        table.string('id_ong').notNullable().references('id').inTable('ong');
        table.string('id_ong_bank_data').notNullable().references('id').inTable('user_bank_data');

        table.string('id_animal').notNullable().references('id').inTable('animals');
        
        table.string('creation_date').notNullable(); //Titular
        table.float('value').notNullable();
     
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('sponsorships');
};
