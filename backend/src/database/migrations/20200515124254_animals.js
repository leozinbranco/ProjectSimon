
exports.up = function(knex) {
    return knex.schema.createTable('animals', function (table){

        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('born_date').notNullable();
        table.string('register_date').notNullable();
        table.string('breed').notNullable();
        table.string('color').notNullable();
        table.string('description').notNullable();
        table.string('available_for_adoption', 1).notNullable(); 
        table.string('available_for_patronize', 1).notNullable();  
        table.integer('type_id').unsigned();
        table.foreign('type_id').references('animals_types.id');
        table.integer('ong_id').unsigned();
        table.foreign('ong_id').references('ongs.id');
        table.string('image_url').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('animals');

};
