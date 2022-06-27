import React from 'react';
import '../styles/Home.css';
// import mealIcon from '../images/mealIcon.svg';

export default function Home() {
  return (
    <div className="recipeApp">
      <h1>
        <span>Recipe</span>
        {' '}
        App
      </h1>
      {/* <img src={ mealIcon } alt="Ícone de comida" data-testid="food-bottom-btn" /> */}
    </div>
  );
}
