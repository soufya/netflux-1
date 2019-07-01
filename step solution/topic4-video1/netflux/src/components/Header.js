import React from 'react';
import Logo from './Logo';
import MenuBar from "./MenuBar";

const Header = () => {
    return (
      <header className="section" role="navigation">
        <div className="container">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="navbar-burger" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <Logo />
          <MenuBar active="active"/>
          <div className="navbar-search">
            <button><i className="fas fa-search"></i></button>
            <input className="searchInput" type="text" name="search" placeholder="إبحث عن فيلم أو مسلسل..." />
					</div>
      </div>
		</header>
    );
}

export default Header;
