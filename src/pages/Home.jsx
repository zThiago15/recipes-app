import React from 'react';
import '../styles/Home.css';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const milisegundos = 4000;
  const loading = setInterval(() => {
    clearInterval(loading);
    document.getElementById('loading').style.display = 'none';
    history.push('/');
  }, milisegundos);

  return (
    <div className="container" id="loading">

      <h1>Recipe</h1>
      <span>App</span>

      <a href="/">
        {' '}
        <i className="fa fa-cutlery" />
        {' '}
      </a>
    </div>
  );
}
