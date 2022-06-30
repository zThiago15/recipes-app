import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/BottomMenu.css';

export default function BottomMenu() {
  const history = useHistory();

  const path = window.location.href;

  return (
    <footer
      className="footer"
      data-testid="footer"
    >
      <div className={ path.includes('drinks') ? 'btnSelected' : 'btnStandard' }>
        <button
          type="button"
          onClick={ () => history.push('/drinks') }
        >
          <img src={ drinkIcon } alt="Ícone de bebida" data-testid="drinks-bottom-btn" />
        </button>
      </div>
      <div className={ path.includes('explore') ? 'btnSelected' : 'btnStandard' }>
        <button
          type="button"
          onClick={ () => history.push('/explore') }
        >
          <img
            src={ exploreIcon }
            alt="Ícone de exploração"
            data-testid="explore-bottom-btn"
          />
        </button>
      </div>
      <div className={ path.includes('foods') ? 'btnSelected' : 'btnStandard' }>
        <button
          type="button"
          onClick={ () => history.push('/foods') }
        >
          <img src={ mealIcon } alt="Ícone de comida" data-testid="food-bottom-btn" />
        </button>
      </div>
    </footer>
  );
}
