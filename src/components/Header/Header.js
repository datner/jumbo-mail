import React from "react";
import "./Header.scss";
import Link from "components/Link";

const Header = () => (
  <nav>
    <div className="header">
      <div className="right-links">
        <Link to="/signup"></Link>
      </div>
      <div className="spacer" />
      <div className="left-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  </nav>
);

export default Header;
