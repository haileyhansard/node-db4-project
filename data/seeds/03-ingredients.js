
exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Grilled chicken'},
        {id: 2, ingredient_name: 'Pepper'},
        {id: 3, ingredient_name: 'Fresh lemon juice'},
        {id: 4, ingredient_name: 'Lettuce'},
        {id: 5, ingredient_name: 'Tomato'},
        {id: 6, ingredient_name: 'Dressing'},
        {id: 7, ingredient_name: 'Black beans'},
        {id: 8, ingredient_name: 'Onions'},
        {id: 9, ingredient_name: 'Can of salsa'},
      ]);
    });
};
