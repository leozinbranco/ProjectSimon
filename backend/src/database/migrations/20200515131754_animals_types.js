
exports.up = function(knex) {
    knex.schema.createTable('animals_types', function (table){
        table.increments('id').primary();
        table.string('type_name').notNullable();
    })

    knex('animals_types').insert({type_name: 'Cachorro'})
    knex('animals_types').insert({type_name: 'Gato'})

};

exports.down = function(knex) {
    return knex.schema.dropTable('animals_types');

};
