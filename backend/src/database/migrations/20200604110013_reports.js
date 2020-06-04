
exports.up = function(knex) {
    return knex.schema.createTable('reports', function (table){
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('desc').notNullable();
        table.string('register_date').notNullable();
        //table.integer('type_id').unsigned();
        table.integer('id_animal_type').notNullable().references('id').inTable('animals_types');
        //table.foreign('type_name').references('animals.id');
        table.string('status', 1).notNullable();
        table.string('map_long').notNullable();
        table.string('map_lati').notNullable();
        table.string('priority').notNullable();
        });

};

exports.down = function(knex) {
    return knex.schema.dropTable('reports');

};
