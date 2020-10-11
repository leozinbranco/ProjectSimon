
exports.up = function(knex) {
    return knex.schema.createTable('patronize', function (table){
        table.increments('id').primary();
        table.integer('id_user').notNullable().references('id').inTable('users');
        table.integer('id_user_bank_data').notNullable().references('id').inTable('user_bank_data');
        table.integer('id_ong').notNullable().references('id').inTable('ongs');
        table.integer('id_ong_bank_data').notNullable().references('id').inTable('ong_bank_data');
        table.integer('id_animal').notNullable().references('id').inTable('animals');
        table.string('creation_date').notNullable(); //Titular
        table.float('value').notNullable();
        table.string('monthly', 1).notNullable();

     
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('patronize');
};
