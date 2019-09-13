import React from "react";
import Login from "components/LogIn";
import LanguagePicker from "./LanguagePicker";
import { NavLink } from "components/Link";
import { useModal } from "contexts/modalContext";

import "./Header.scss";

const Header = () => {
  const { setModal } = useModal();

  const setLogin = () => setModal(Login);
  return (
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
          <button onClick={setLogin}> log in </button>
          <button to="/signup">
            {" "}
            <span role="img" aria-label="black">
              ⬛
            </span>{" "}
          </button>
        </div>
        <LanguagePicker />
      </div>
    </nav>
  );
};

export default Header;
