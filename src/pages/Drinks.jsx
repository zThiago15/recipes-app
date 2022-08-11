import React, { useContext, useState, useEffect } from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import FoodContext from '../FoodContext/foodContext';
import FilterBtns from '../components/FilterBtns';
import Recipes from '../components/Recipes';
import { getAllDrinksInitial,
  getDrinkByCategory, getDrinkByIngredient } from '../service/drinkAPI';
import '../styles/Drinks.css';

export default function Drinks() {
  const [filter, setFilter] = useState('All');
  const [preview, setPreview] = useState('');
  const { buttonDrink, drink, setDrink } = useContext(FoodContext);

  // A Refatorar
  const handleFilter = (filterName) => {
    if (filterName !== filter) {
      setFilter(filterName);
    }
    if (filterName === filter) {
      setPreview(filterName);
      setFilter('All');
    }
  };

  // A Refatorar
  useEffect(() => {
    const getIngredients = async () => {
      const ingredient = localStorage.getItem('filteredIngredient');
      if (ingredient !== null) {
        // comidas filtradas por ingrediente
        const drinksFilterByIngredient = await getDrinkByIngredient(ingredient);
        setDrink(drinksFilterByIngredient);
      }
    };
    getIngredients();
  }, [setDrink]);

  // A Refatorar
  useEffect(() => {
    const ingredient = localStorage.getItem('filteredIngredient');

    const handleIngredient = () => {
      if (ingredient === null || ingredient === '') {
        const fetchDrinks = async () => {
          const drinks = await getAllDrinksInitial();
          setDrink(drinks);
        };
        const getDrinksByCategory = async (category) => {
          const drinks = await getDrinkByCategory(category);
          setDrink(drinks);
        };
        const handleDrinksCategorys = () => {
          if (filter !== 'All') {
            getDrinksByCategory(filter);
          }
          if (filter === 'All' || filter === preview) {
            fetchDrinks();
          }
        };
        handleDrinksCategorys();
      }
    };
    handleIngredient();
  }, [filter, setDrink, preview]);

  return (
    <section
      className="drinksSection"
    >
      <Header title="Drinks" showSearchIcon />
      <FilterBtns
        buttons={ buttonDrink }
        handleFilter={ handleFilter }
      />

      <Recipes
        recipes={ drink }
      />
      <BottomMenu />
    </section>
  );
}
