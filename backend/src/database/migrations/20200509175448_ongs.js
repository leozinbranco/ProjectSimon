
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table){
        table.increments('id').primary();
        table.string('company_name').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('cep').notNullable();
        table.decimal('number').notNullable();
        table.string('cnpj').notNullable();
        table.string('born_date').notNullable();
        table.string('register_date').notNullable();

        
          
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
