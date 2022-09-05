import React, { useState } from "react";
import placeholder from "./img/placeholder.png";
import NavbarBtn from "./NavbarBtn";

import styles from "./Navbar.module.scss";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

function Navbar() {
  const [showToggle, setShowToggle] = useState(false);

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
        <NavbarBtn text="MyFavorites" link="/" style={styles.navLink} route={'/favorites'} />
        <NavbarBtn text="Trending" link="/" style={styles.navLink} route={'/trending'}/>
        <NavbarBtn
          text="Random"
          link="/"
          style={`${styles.navLink} ${styles.randomBtn}`}
          route={'/random'}
        />
        <button
          onClick={showToggleHandler}
          className={`${styles.arrow} ${styles.arrowRight}`}
        >
          <BsArrowRight />
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
          <BsArrowLeft />
        </button>
        <div className={styles.toggle}>
          <img src={placeholder} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
