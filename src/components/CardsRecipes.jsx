import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../styles/CardRecipes.css';
import { useHistory } from 'react-router-dom';
import FoodContext from '../FoodContext/foodContext';

function CardsRecipes({
  dataTestIdCard,
  dataTestIdImage,
  dataTestIdName,
  name,
  image,
  id,
}) {
  const { setCurrentRecipeId } = useContext(FoodContext);
  const history = useHistory();
  const handleRedirect = ({ target }) => {
    setCurrentRecipeId(target.id);
    localStorage.setItem('filteredIngredient', '');
    if (history.location.pathname.includes('foods')) {
      history.push(`/foods/${target.id}`);
    } else {
      history.push(`/drinks/${target.id}`);
    }
  };

  return (
    <div
      className="card-content"
      data-testid={ dataTestIdCard }
    >
      <p data-testid={ dataTestIdName }>{ name }</p>
      <img
        className="card-image"
        data-testid={ dataTestIdImage }
        src={ image }
        alt={ name }
      />
      <p data-testid={ dataTestIdName }>{ name }</p>

      <button
        className="access-btn"
        data-testid={ dataTestIdCard }
        type="button"
        id={ id }
        onClick={ (e) => handleRedirect(e) }
      >
        Acessar Receita
      </button>
    </div>
  );
}

CardsRecipes.propTypes = {
  dataTestIdCard: PropTypes.string,
  dataTestIdImage: PropTypes.string,
  dataTestIdName: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default CardsRecipes;
