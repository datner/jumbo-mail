import React from "react";
import "./Header.scss";
import { NavLink } from "components/Link";

const Header = () => (
  <nav>
    <div className="header">
      <div className="links">
        <NavLink exact to="/">
          JUMBO<sub>mail</sub>
        </NavLink>
        <NavLink to="/why-go-pro"> why go pro </NavLink>
        <NavLink to="/plans"> plans </NavLink>
        <NavLink to="/get-5gb"> get 5gb </NavLink>
      </div>
      <div className="spacer" />
      <div className="links">
        <NavLink to="/send-email"> send email </NavLink>
        <NavLink to="/signup"> sign up </NavLink>
        <button onClick={() => alert("lamo")}> log in </button>
        <button to="/signup"> <span role="img" aria-label="black">⬛</span> </button>
      </div>
    </div>
  </nav>
);

export default Header;
