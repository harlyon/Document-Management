import React from "react";

const Nav = () => {
  return (
    <header id="topnav" className="defaultscroll navigation-menu nav-light">
      <div className="container">
        {/* Logo container*/}
        <div>
          <a className="logo" href="index.html">
            <img
              src="http://shreethemes.in/landrick/assets/images/logo-dark.png"
              className="l-dark"
              height={24}
              alt=""
            />
            <img
              src="http://shreethemes.in/landrick/layouts/images/logo-light.png"
              className="l-light"
              height={24}
              alt=""
            />
          </a>
        </div>
        <div className="buy-button">
          <a href="/login">
            <div className="btn btn-primary login-btn-primary">Login</div>
            <div className="btn btn-light login-btn-light">Login</div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
