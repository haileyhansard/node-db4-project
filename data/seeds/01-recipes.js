
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Lemon Pepper Chicken'},
        {id: 2, recipe_name: 'Summer Salad'},
        {id: 3, recipe_name: 'Black Bean Salsa'}
      ]);
    });
};
