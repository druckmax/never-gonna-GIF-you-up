import React, { useState, useContext } from "react";
// import placeholder from "./img/placeholder.png";
import NavbarBtn from "./NavbarBtn";
import MySwitch from "./mySwitch";
import { MainContext } from "../../context/context";

import "./Navbar.scss";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

function Navbar() {
  const [showToggle, setShowToggle] = useState(false);

  const context = useContext(MainContext);

  const showToggleHandler = () => {
    showToggle ? setShowToggle(false) : setShowToggle(true);
  };
  
  return (
    <div className='navbarContainer'>
      <div
        className={`navLinkContainer ${showToggle && 'transformNavLinks'}`}
      >
        <NavbarBtn
          text="MyFavorites"
          link="/"
          className='navLink'
          route={"/favorites"}
        />
        <NavbarBtn
          text="Trending"
          link="/"
          className='navLink'
          route={"/trending"}
        />
        <NavbarBtn
          text="Random"
          link="/"
          className='navLink randomBtn'
          route={"/random"}
        />
        <button
          onClick={showToggleHandler}
          className='arrow arrowRight'
        >
          <BsArrowRightCircle />
        </button>
      </div>

      <div
        className={`toggleContainer ${
          showToggle ? 'transformToggle' : null
        }`}
      >
        <button
          onClick={showToggleHandler}
          className='arrow arrowLeft'
        >
          <BsArrowLeftCircle />
        </button>
        <div className='toggle'>
          Dark
          <div className="switch">
            {
              <MySwitch
                toggleTheme={context.toggleTheme}
                checked={context.theme === "dark"}
              />
            }
          </div>
          Light
        </div>
      </div>
    </div>
  );
}

export default Navbar;
