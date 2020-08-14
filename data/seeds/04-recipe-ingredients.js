
exports.seed = function(knex) {
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, quantity: 2, recipe_id: 1, ingredient_id: 1},
        {id: 2, quantity: 1, recipe_id: 1, ingredient_id: 2},
        {id: 3, quantity: 3, recipe_id: 1, ingredient_id: 3},
        {id: 4, quantity: 1, recipe_id: 2, ingredient_id: 4},
        {id: 5, quantity: 4, recipe_id: 2, ingredient_id: 5},
        {id: 6, quantity: 1, recipe_id: 2, ingredient_id: 6},
        {id: 7, quantity: 1, recipe_id: 3, ingredient_id: 7},
        {id: 8, quantity: 2, recipe_id: 3, ingredient_id: 8},
        {id: 9, quantity: 1, recipe_id: 3, ingredient_id: 9}
      ]);
    });
};
