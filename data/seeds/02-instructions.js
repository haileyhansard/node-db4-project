
exports.seed = function(knex) {
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step_number: 1, instructions: 'Cook chicken until cooked thoroughly on grill or stovetop.', recipe_id: 1},
        {id: 2, step_number: 2, instructions: 'Make sauce, combining the lemon juice and black pepper.', recipe_id: 1},
        {id: 3, step_number: 3, instructions: 'Pour the sauce onto the chicken, mix until spread evenly.', recipe_id: 1},
      ]);
    });
};
