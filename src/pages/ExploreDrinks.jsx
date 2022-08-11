import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { getDrinksRandom } from '../service/drinkAPI';
import BottomMenu from '../components/BottomMenu';

function ExploreDrinks() {
  const history = useHistory();

  const surpriseMeRandom = async () => {
    const drink = await getDrinksRandom();
    history.push(`/drinks/${drink[0].idDrink}`);
  };

  return (
    <section
      className="exploreDrinksSection"
    >
      <Header
        title="Explore Drinks"
        showSearchIcon={ false }
      />
      <div
        className="exploreDrinksBtns"
      >
        <Button
          dataTestIdButton="explore-by-ingredient"
          name="By Ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
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

export default ExploreDrinks;
