import React, { useState } from "react";
// import placeholder from "./img/placeholder.png";
import NavbarBtn from "./NavbarBtn";
import MySwitch from "./mySwitch";
import { useContext } from "react";
import { ThemeContext } from "../../App";

import styles from "./Navbar.module.scss";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

function Navbar() {
  const [showToggle, setShowToggle] = useState(false);

  const theme = useContext(ThemeContext);

  const showToggleHandler = () => {
    showToggle ? setShowToggle(false) : setShowToggle(true);
  };

  console.log(showToggle);

  return (
    <div className={styles.navbarContainer}>
      <div
        className={`${styles.navLinkContainer}
        ${showToggle ? styles.transformNavLinks : null}`}
      >
        <NavbarBtn
          text="MyFavorites"
          link="/"
          style={styles.navLink}
          route={"/favorites"}
        />
        <NavbarBtn
          text="Trending"
          link="/"
          style={styles.navLink}
          route={"/trending"}
        />
        <NavbarBtn
          text="Random"
          link="/"
          style={`${styles.navLink} ${styles.randomBtn}`}
          route={"/random"}
        />
        <button
          onClick={showToggleHandler}
          className={`${styles.arrow} ${styles.arrowRight}`}
        >
          <BsArrowRightCircle />
        </button>
      </div>

      <div
        className={`${styles.toggleContainer} ${
          showToggle ? styles.transformToggle : null
        }`}
      >
        <button
          onClick={showToggleHandler}
          className={`${styles.arrow} ${styles.arrowLeft}`}
        >
          <BsArrowLeftCircle />
        </button>
        <div className={styles.toggle}>
          Dark
          <div className="switch">
            {
              <MySwitch
                toggleTheme={theme.toggleTheme}
                checked={theme.theme === "dark"}
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
