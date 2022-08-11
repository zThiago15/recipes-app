import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import BottomMenu from '../components/BottomMenu';
import '../styles/Explore.css';

export default function Explore() {
  const history = useHistory();
  return (
    <section
      className="exploreSection"
    >
      <Header
        title="Explore"
        showSearchIcon={ false }
      />
      <div
        className="exploreBtns"
      >
        <Button
          dataTestIdButton="explore-foods"
          name="Explore Foods"
          onClick={ () => history.push('/explore/foods') }
        />
        <Button
          dataTestIdButton="explore-drinks"
          name="Explore Drinks"
          onClick={ () => history.push('/explore/drinks') }
        />
      </div>
      <BottomMenu />
    </section>
  );
}
