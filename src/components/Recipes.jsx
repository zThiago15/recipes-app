import React from 'react';
import Proptypes from 'prop-types';
import CardsRecipes from './CardsRecipes';
import '../styles/Recipes.css';

const NUMBER_OF_CARDS = 12;

export default function Recipes({ recipes }) {
  return (
    <div
      className="allCardRecipes"
    >
      { recipes && recipes.slice(0, NUMBER_OF_CARDS).map((recipe, index) => (
        <CardsRecipes
          key={ recipe.idMeal || recipe.idDrink }
          name={ recipe.strMeal || recipe.strDrink }
          id={ recipe.idMeal || recipe.idDrink }
          image={ recipe.strMealThumb || recipe.strDrinkThumb }
          dataTestIdCard={ `${index}-recipe-card` }
          dataTestIdImage={ `${index}-card-img` }
          dataTestIdName={ `${index}-card-name` }
        />
      ))}
    </div>
  );
}

Recipes.propTypes = {
  recipes: Proptypes.arrayOf(Proptypes.object).isRequired,
};
