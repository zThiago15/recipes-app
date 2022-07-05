import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ShareOrFavoriteBtns from '../components/ShareOrFavoriteBtnsVariant';

export default function FavoriteRecipes() {
  const history = useHistory();

  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const redirectRecipeDetails = (nationality, id) => {
    if (nationality !== '') {
      history.push(`/foods/${id}`);
    } else {
      history.push(`/drinks/${id}`);
    }
  };

  useEffect(() => {
    const recipesFavorited = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (recipesFavorited) {
      setFavoriteRecipes(recipesFavorited);
      setFilteredRecipes(recipesFavorited);
    }
  }, []);

  const filterRecipes = (type) => {
    if (type === 'meal') {
      const meals = favoriteRecipes.filter(({ alcoholicOrNot }) => alcoholicOrNot === '');
      setFilteredRecipes(meals);
    } else {
      const drinks = favoriteRecipes
        .filter(({ alcoholicOrNot }) => alcoholicOrNot !== '');
      setFilteredRecipes(drinks);
    }
  };
  const renderAllRecipes = () => {
    setFilteredRecipes(favoriteRecipes);
  };

  return (
    <div>
      <Header
        title="Favorite Recipes"
        showSearchIcon={ false }
      />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => renderAllRecipes() }
      >
        All

      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => filterRecipes('meal') }
      >
        Food

      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => filterRecipes('drinks') }
      >
        Drinks

      </button>

      { filteredRecipes
        .map((recipe, index) => (
          <div key={ Math.random() }>
            <button
              type="button"
              onClick={ () => redirectRecipeDetails(recipe.nationality, recipe.id) }
            >
              <img
                src={ recipe.image }
                alt="Receita"
                data-testid={ `${index}-horizontal-image` }
                style={ { width: '100%' } }
              />
            </button>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {recipe.nationality === '' ? (
                recipe.alcoholicOrNot
              ) : (
                `${recipe.nationality} - ${recipe.category}`
              )}
            </p>
            <button
              type="button"
              onClick={ () => redirectRecipeDetails(recipe.nationality, recipe.id) }
            >
              <p
                data-testid={ `${index}-horizontal-name` }
              >
                {recipe.name}
              </p>
            </button>
            <ShareOrFavoriteBtns
              id={ recipe.id }
              recipe={ recipe }
              index={ index }
              setFilteredRecipes={ setFilteredRecipes }
            />
          </div>
        )) }
    </div>
  );
}
