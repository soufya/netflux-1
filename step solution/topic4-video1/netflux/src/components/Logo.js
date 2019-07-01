import React from 'react';
import logo from '../img/logo.svg';

const Logo = (props) => {
  return (
    <a className={`navbar-item ${props.classes}`} href="#/"><img src={logo} width="80" alt="netflux logo" /></a>
  );
}

export default Logo;