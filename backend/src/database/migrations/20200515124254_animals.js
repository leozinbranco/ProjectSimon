
exports.up = function(knex) {
    return knex.schema.createTable('animals', function (table){

        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('born_date').notNullable();
        table.string('race').notNullable();
        table.string('color').notNullable();
        table.string('description').notNullable();

        table.foreign('type_id').references('id').inTable('animals_types');
        table.foreign('ong_id').references('id').inTable('ongs');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('animals');

};
