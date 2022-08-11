import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients({ ingredients, handleIngredient, mealOrDrink }) {
  return (
    <div
      className="ingredientsContainer"
    >
      { ingredients && ingredients.map((ingredient, index) => {
        const limit = 12;
        if (index < limit) {
          return (
            <button
              type="button"
              onClick={ () => handleIngredient(ingredient.strIngredient
                  || ingredient.strIngredient1) }
              key={ ingredient.strIngredient || ingredient.strIngredient1 }
            >
              <div
                className="ingredient"
                data-testid={ `${index}-ingredient-card` }
                key={ ingredient.strIngredient || ingredient.strIngredient1 }
              >
                <img data-testid={ `${index}-card-img` } src={ mealOrDrink === 'foods' ? `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` : `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` } alt={ ingredient.strIngredient || ingredient.strIngredient1 } />
                <p
                  data-testid={ `${index}-card-name` }
                >
                  { ingredient.strIngredient || ingredient.strIngredient1 }

                </p>
              </div>
            </button>
          );
        }
        return '';
      }) }
    </div>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleIngredient: PropTypes.func.isRequired,
}.isRequired;
