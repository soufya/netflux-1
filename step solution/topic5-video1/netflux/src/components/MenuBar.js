import React from "react";

const MenuBar = (props) => {
  return (
    <ul className="navbar-menu">
      <li><a className={`navbar-item ${props.active}`} href="/">الرئيسية</a></li>
      <li><a className="navbar-item" href="./movies.html">أفلام</a></li>
      <li><a className="navbar-item" href="./shows.html">مسلسلات</a></li>
    </ul>
  );
}

export default MenuBar;