import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/BottomMenu.css';

export default function BottomMenu() {
  const history = useHistory();

  const path = window.location.href;

  const ACTIVE_PAGE = 'pageBtn active';

  const ACTIVE_EXPLORE = 'exploreBtn active';

  const checkExplorePath = () => {
    if (path.includes('explore') && (path.includes('food') || path.includes('drink'))) {
      return ACTIVE_EXPLORE;
    }
    return ACTIVE_PAGE;
  };

  return (
    <footer
      className="footer"
      data-testid="footer"
    >
      <div className="footerBtns">
        <div className={ path.includes('drinks') ? ACTIVE_PAGE : 'pageBtn' }>
          <button
            type="button"
            onClick={ () => history.push('/drinks') }
          >
            <img
              src={ drinkIcon }
              alt="Ícone de bebida"
              data-testid="drinks-bottom-btn"
            />
          </button>
        </div>
        <div
          className={
            path.includes('explore') ? checkExplorePath() : 'pageBtn'
          }
        >
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
        <div className={ path.includes('foods') ? ACTIVE_PAGE : 'pageBtn' }>
          <button
            type="button"
            onClick={ () => history.push('/foods') }
          >
            <img src={ mealIcon } alt="Ícone de comida" data-testid="food-bottom-btn" />
          </button>
        </div>
      </div>
    </footer>
  );
}
