import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/BottomMenu.css';

export default function BottomMenu() {
  const history = useHistory();

  const toogle = ({ target }) => {
    const btns = document.querySelectorAll('.btnStandard');
    btns.forEach((btn) => {
      btn.className = 'btnStandard';
    });
    target.parentNode.classList.add('btnSelected');
  };

  return (
    <footer data-testid="footer">
      <div className="btnStandard">
        <button
          type="button"
          onClick={ (e) => {
            history.push('/drinks');
            toogle(e);
          } }
        >

          <img src={ drinkIcon } alt="Ícone de bebida" data-testid="drinks-bottom-btn" />
        </button>
      </div>
      <div className="btnStandard">
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
      <div className="btnStandard btnSelected">
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
