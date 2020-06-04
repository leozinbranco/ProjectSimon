
exports.up = function(knex) {
    return knex.schema.createTable('ong_bank_data', function (table){
        table.increments('id').primary();
        table.integer('id_ong').notNullable().references('id').inTable('ongs');
        table.string('bank_code');
        table.integer('agency_number');
        table.integer('digit');
        table.integer('account_type');
        table.string('account_number');
        table.integer('account_digit');
        table.string('company_name');
        table.string('tel');
        table.string('cnpj');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ong_bank_data');
};
