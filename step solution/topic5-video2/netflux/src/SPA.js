import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import Shows from './pages/Shows';

const SPA = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default SPA;