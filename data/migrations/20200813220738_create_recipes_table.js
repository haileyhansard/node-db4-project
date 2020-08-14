
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments('id');
    tbl.string('recipe_name', 256)
        .unique()
        .notNullable();
  })
  .createTable('instructions', tbl => {
    tbl.increments('id');
    tbl.integer('step_number')
        .unsigned()
        .notNullable();
    tbl.text('instructions')
        .notNullable();
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
  })
  .createTable('ingredients', tbl => {
    tbl.increments('id');
    tbl.string('ingredient_name', 256)
        .notNullable();
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.increments('id');
    tbl.float('quantity')
        .notNullable();
    tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
  });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipes')
};
