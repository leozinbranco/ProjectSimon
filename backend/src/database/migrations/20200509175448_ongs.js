
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table){
        table.decimal('id').primary();
        table.string('company_name').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('cep').notNullable();
        table.decimal('number').notNullable();
        table.string('cnpj').notNullable();
        
          
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
