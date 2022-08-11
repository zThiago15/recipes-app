import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/FilterBtns.css';

const NUMBER_CATEGORIES = 5;

export default function FilterBtns({ buttons, handleFilter }) {
  return (
    <div className="btnsFilter">
      <Button
        dataTestIdButton="All-category-filter"
        name="All"
        onClick={ ({ target }) => handleFilter(target.name) }
      />
      {buttons
        && buttons
          .slice(0, NUMBER_CATEGORIES)
          .map((categories, index) => (
            <Button
              key={ index }
              dataTestIdButton={ `${categories.strCategory}-category-filter` }
              name={ categories.strCategory }
              onClick={ ({ target }) => handleFilter(target.name) }
            />
          ))}
    </div>
  );
}

FilterBtns.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleFilter: PropTypes.func.isRequired,
}.isRequired;
