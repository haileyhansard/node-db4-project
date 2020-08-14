const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getRecipeById,
    getShoppingList,
};

//get all recipes
function getRecipes() {
    return db('recipes');
}

//get recipe by its id
function getRecipeById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

//get list of ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
    return db('recipes')
    .join('recipe_ingredients', 'recipe_ingredients.recipe_id', '=', 'recipes.id')
    .join('recipe_ingredients', 'recipe_ingredients.ingredient_id', '=', 'ingredients.id')
    .select('recipes.recipe_name', 'ingredients.ingredient_name', 'recipe_ingredients.quantity' )
    .where({ id: recipe_id })
}

//get list of step-by-step instructions for preparing a recipe
