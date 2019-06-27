import React from 'react';
import logo from '../img/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="section" role="navigation">
        <div className="container">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="navbar-burger" for="menu-btn">
            <span className="navicon"></span>
          </label>
          <a className="navbar-item" href="#/"><img src={logo} width="80" /></a>
          <ul className="navbar-menu">
            <li><a className="navbar-item active" href="/">الرئيسية</a></li>
            <li><a className="navbar-item" href="./movies.html">أفلام</a></li>
            <li><a className="navbar-item" href="./shows.html">مسلسلات</a></li>
          </ul>
          <div className="navbar-search">
            <button><i className="fas fa-search"></i></button>
            <input className="searchInput" type="text" name="search" placeholder="إبحث عن فيلم أو مسلسل..." />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
