import React from 'react';

const Navigation = () => {
  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        <div>
          <a className="logo" href="#">
            <img src="https://static-cdn.pixlr.com/images/index/squared.png" height={24} alt="" />
          </a>
        </div>
        <div className="buy-button">
          <a href="/" target="_blank" className="btn btn-primary">Logout</a>
        </div>
        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle">
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </a>
          </div>
        </div>
        <div id="navigation">
          <ul className="navigation-menu">
            <li className="has-submenu active">
              <a href="#home">Home</a>
            </li>
            <li className="has-submenu">
              <a href="#service">Feature</a>
            </li>
            <li className="has-submenu">
              <a href="#testimonial">Review</a>
            </li>
            <li className="has-submenu">
              <a href="#pricing">Price</a>
            </li>
            <li className="has-submenu">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;