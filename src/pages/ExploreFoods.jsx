import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { getMealRandom } from '../service/mealAPI';
import BottomMenu from '../components/BottomMenu';
import '../styles/Explore.css';

function ExploreFoods() {
  const history = useHistory();

  const surpriseMeRandom = async () => {
    const meal = await getMealRandom();
    history.push(`/foods/${meal[0].idMeal}`);
  };

  return (
    <section
      className="exploreFoodsSection"
    >
      <Header
        title="Explore Foods"
        showSearchIcon={ false }
      />
      <div className="exploreFoodsBtns">
        <Button
          dataTestIdButton="explore-by-ingredient"
          name="By Ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        />
        <Button
          dataTestIdButton="explore-by-nationality"
          name="By Nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        />
        <Button
          dataTestIdButton="explore-surprise"
          name="Surprise me!"
          onClick={ surpriseMeRandom }
        />
      </div>
      <BottomMenu />
    </section>
  );
}

export default ExploreFoods;
