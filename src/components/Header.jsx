import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Profile from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/Header.css';

export default function Header(props) {
  const history = useHistory();
  const { title, showSearchIcon } = props;
  const toogleSearchBar = () => {
    const formSearchBar = document.querySelector('.formSearchBar');
    const header = document.querySelector('header');
    header.classList.toggle('header-active');
    formSearchBar.classList.toggle('active');
  };
  return (
    <header className="header">
      <button
        className="btnProfile"
        type="button"
        data-testid="profile-top-btn"
        src="profileIcon"
        onClick={ () => history.push('/profile') }
      >
        <img
          src={ Profile }
          alt="Profile"
        />
      </button>
      <p data-testid="page-title">
        { title }
      </p>
      {showSearchIcon && (
        <button
          className="btnSearchIcon"
          type="button"
          data-testid="search-top-btn"
          src="searchIcon"
          onClick={ () => toogleSearchBar() }
        >
          <img
            src={ SearchIcon }
            alt="Profile"
          />
        </button>)}
      <SearchBar />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
