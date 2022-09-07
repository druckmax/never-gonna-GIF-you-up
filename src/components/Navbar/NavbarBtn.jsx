import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { MainContext } from "../../context/context";

function NavbarBtn({ randomFetchBtn, text, link, className, route }) {
  const context = useContext(MainContext);

  const randomFetchBtnHandler = () => {
    if (randomFetchBtn) {
      context.fetchRandom();
    }
  };

  return (
    <div
      className={`borderWrapper ${
        context.theme === "light" && "borderWrapper-light"
      }`}
    >
      <NavLink
        onClick={randomFetchBtnHandler}
        to={route}
        className={
          className === "navLink" && context.theme === "light"
            ? `${className} navLink-light`
            : className
        }
        href={link}
      >
        {text}
      </NavLink>
    </div>
  );
}

export default NavbarBtn;
