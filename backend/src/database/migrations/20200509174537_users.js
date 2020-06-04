
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table){
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('whatsapp').notNullable();
        table.string('cep');
        table.string('born_date').notNullable();
        table.string('register_date').notNullable();
        table.string('bio');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
