import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CardRecipes.css';

function CardsRecipes({ dataTestIdCard, dataTestIdImage, dataTestIdName, name, image }) {
  return (
    <div
      className="card-content"
      data-testid={ dataTestIdCard }
    >

      <img
        className="card-image"
        data-testid={ dataTestIdImage }
        src={ image }
        alt={ name }
      />
      <p data-testid={ dataTestIdName }>{ name }</p>

    </div>
  );
}

CardsRecipes.propTypes = {
  dataTestIdCard: PropTypes.string.isRequired,
  dataTestIdImage: PropTypes.string.isRequired,
  dataTestIdName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardsRecipes;
