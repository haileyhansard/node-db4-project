const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

//get all recipes
router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes' })
    });
});

//get recipe by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Recipes.getRecipeById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe' });
    });
  });


//get list of ingredients and quantities for a given recipe
router.get('/:id/shoppinglist', (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
        .then(shoppinglist => {
            if (shoppinglist.length) {
                res.json(shoppinglist)
            } else {
                res.status(404).json({ message: 'Could not find ingredients and quantities for shopping list' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get shopping list' })
        });
});

//get list of step-by-step instructions for preparing a recipe


module.exports = router;