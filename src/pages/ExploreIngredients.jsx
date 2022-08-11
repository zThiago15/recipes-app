import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';
import { getAllMealIngredients } from '../service/mealAPI';
import { getAllDrinkIngredients } from '../service/drinkAPI';
import '../styles/ExploreIngredients.css';
import Ingredients from '../components/Ingredients';

export default function ExploreIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const [mealOrDrink, setMealOrDrink] = useState('');
  const history = useHistory();

  const { pathname } = useLocation();

  useEffect(() => {
    const saveIngredients = async () => {
      if (pathname.includes('foods')) {
        const results = await getAllMealIngredients();
        setIngredients(results);
        setMealOrDrink('foods');
      } else {
        const results = await getAllDrinkIngredients();

        setIngredients(results);
        setMealOrDrink('drinks');
      }
    };
    saveIngredients();
  }, [pathname]);

  const handleIngredient = (ingredient) => {
    localStorage.setItem('filteredIngredient', ingredient);
    history.push(`/${mealOrDrink}`);
  };

  return (
    <section
      className="exploreIngredientsSection"
    >
      <Header
        title="Explore Ingredients"
        showSearchIcon={ false }
      />
      <Ingredients
        ingredients={ ingredients }
        handleIngredient={ handleIngredient }
        mealOrDrink={ mealOrDrink }
      />
      <BottomMenu />
    </section>
  );
}
