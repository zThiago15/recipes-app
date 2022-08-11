import React, { useContext, useEffect, useState } from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import FoodContext from '../FoodContext/foodContext';
import FilterBtns from '../components/FilterBtns';
import Recipes from '../components/Recipes';
import { getAllMealsInitial,
  getMealByCategory, getMealByIngredient } from '../service/mealAPI';
import '../styles/Food.css';

export default function Food() {
  const [filter, setFilter] = useState('All');

  const [preview, setPreview] = useState('');
  const { buttonMeal, meal, setMeal } = useContext(FoodContext);

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
    const ingredient = localStorage.getItem('filteredIngredient');

    const handleIngredient = () => {
      if (ingredient === null || ingredient === '') {
        const fetchMeals = async () => {
          const meals = await getAllMealsInitial();
          setMeal(meals);
        };
        const getMealsByCategory = async (category) => {
          const meals = await getMealByCategory(category);
          setMeal(meals);
        };
        const handleMealsCategorys = () => {
          if (filter !== 'All') {
            getMealsByCategory(filter);
          }
          if (filter === 'All' || filter === preview) {
            fetchMeals();
          }
        };
        handleMealsCategorys();
      }
    };
    handleIngredient();
  }, [filter, setMeal, preview]);

  // A Refatorar
  useEffect(() => {
    const getIngredients = async () => {
      const ingredient = localStorage.getItem('filteredIngredient');
      if (ingredient !== null) {
        // comidas filtradas por ingrediente
        const mealsFilterByIngredient = await getMealByIngredient(ingredient);
        setMeal(mealsFilterByIngredient);
      }
    };
    getIngredients();
  }, [setMeal]);

  return (
    <section
      className="foodsSection"
    >
      <Header
        title="Foods"
        showSearchIcon
      />
      <FilterBtns
        buttons={ buttonMeal }
        handleFilter={ handleFilter }
      />
      <Recipes
        recipes={ meal }
      />
      <BottomMenu />
    </section>
  );
}
