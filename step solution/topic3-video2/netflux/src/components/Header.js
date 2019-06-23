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
          <a className="navbar-item" href="#/"><img src={ logo } width="80" /></a>
          <ul className="navbar-menu">
            <li><a className="navbar-item active" href="/">الرئيسية</a></li>
            <li><a className="navbar-item" href="./movies.html">أفلام</a></li>
            <li><a className="navbar-item" href="./shows.html">مسلسلات</a></li>
            </ul>
          <div className="navbar-search">
            <button><i className="fas fa-search"></i></button>
            <input className="searchInput" type="text" name="search" placeholder="إبحث عن فيلم أو مسلسل..." />
					</div>
          <div className="user-menu">
            <div className="navbar-end">
              <div className="dropdown">
                <div className="dropdown-trigger">
                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>محمد</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">تسجيل خروج</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</header>
    );
  }
}

export default Header;
