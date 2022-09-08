import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { MainContext } from "../../context/context";

function NavbarBtn({ randomFetchBtn, trendingFetchBtn, text, link, className, route }) {
  const context = useContext(MainContext);

  const fetchBtnHandler = () => {
    if(randomFetchBtn) context.fetchRandom()
    if(trendingFetchBtn) context.fetchTrending()
    return;
  };

  return (
    <div
      className={`borderWrapper ${
        context.theme === "light" && "borderWrapper-light"
      }`}
    >
      <NavLink
        onClick={fetchBtnHandler}
        to={route}
        className={
          className.includes("btn-bg-transparent") && context.theme === "light"
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
