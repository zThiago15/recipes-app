import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function ShareOrFavoriteBtns({
  id, recipe: currentRecipe, index, setFilteredRecipes,
}) {
  const [link, setLink] = useState('');
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    JSON.parse(localStorage.getItem('favoriteRecipes')),
  );
  const [isThisRecipeFavorited, setIsThisRecipeFavorited] = useState(false);
  const [newRecipe, setNewRecipe] = useState({});

  const { pathname } = useLocation();

  const [, isFoodOrDrink] = pathname;

  const favoriteRecipe = () => {
    if (favoriteRecipes) {
      const isTheRecipeAlreadyFavorited = favoriteRecipes
        .some((recipe) => recipe.id === id);
      if (isTheRecipeAlreadyFavorited) {
        const newFavoriteRecipes = favoriteRecipes.filter((recipe) => recipe.id !== id);
        localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
        setFilteredRecipes(newFavoriteRecipes);
        setFavoriteRecipes(newFavoriteRecipes);
        setIsThisRecipeFavorited(false);
      } else {
        favoriteRecipes.push(newRecipe);
        localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
        setFavoriteRecipes(favoriteRecipes);
        setIsThisRecipeFavorited(true);
      }
    } else {
      const newFavoriteRecipes = localStorage
        .setItem('favoriteRecipes', JSON.stringify([newRecipe]));
      setFavoriteRecipes(newFavoriteRecipes);
      setIsThisRecipeFavorited(true);
    }
  };

  const share = () => {
    const { id: currentId } = currentRecipe;
    const { type } = currentRecipe;
    const address = window.location.href.split('/');
    const newAddress = address
      .filter((word) => word !== 'favorite-recipes').join('/');
    const url = `${newAddress}/${type}s/${currentId}`;
    navigator.clipboard.writeText(url);
  };

  useEffect(() => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [isThisRecipeFavorited]);

  useEffect(() => {
    if (favoriteRecipes) {
      setIsThisRecipeFavorited(favoriteRecipes
        .some((recipe) => recipe.id === id));
    }
    if (isFoodOrDrink === 'foods') {
      const newFavoiteRecipe = {
        id: currentRecipe.idMeal,
        type: 'food',
        nationality: currentRecipe.strArea,
        category: currentRecipe.strCategory,
        alcoholicOrNot: '',
        name: currentRecipe.strMeal,
        image: currentRecipe.strMealThumb,
      };
      setNewRecipe(newFavoiteRecipe);
    } else {
      const newFavoiteRecipe = {
        id: currentRecipe.idDrink,
        type: 'drink',
        nationality: '',
        category: currentRecipe.strCategory,
        alcoholicOrNot: currentRecipe.strAlcoholic,
        name: currentRecipe.strDrink,
        image: currentRecipe.strDrinkThumb,
      };
      setNewRecipe(newFavoiteRecipe);
    }
  }, [id, favoriteRecipes, isFoodOrDrink, currentRecipe]);

  console.log(currentRecipe);

  return (
    <div>
      <button
        data-testid={ `${index}-horizontal-share-btn` }
        src="shareIcon"
        type="button"
        onClick={ () => {
          setLink('Link copied!');
          share();
        } }
      >
        <img
          src={ shareIcon }
          alt="Share Recipe"
        />
        {link}
      </button>

      <button
        data-testid={ `${index}-horizontal-favorite-btn` }
        type="button"
        src={ isThisRecipeFavorited ? blackHeartIcon : whiteHeartIcon }
        onClick={ favoriteRecipe }
      >
        <img
          src={ isThisRecipeFavorited ? blackHeartIcon : whiteHeartIcon }
          alt={ isThisRecipeFavorited ? 'blackHeartIcon' : 'whiteHeartIcon' }
        />
      </button>
    </div>
  );
}

ShareOrFavoriteBtns.propTypes = {
  id: PropTypes.string,
  currentRecipe: PropTypes.shape({}),
  index: PropTypes.number,
  setFilteredRecipes: PropTypes.func,
}.isRequired;
