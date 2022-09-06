import React from "react";
import giphy_banner from "./img/giphy_banner.gif";
import giphy_banner_white from "./img/giphy_banner_white.gif";
import styles from "./Header.module.scss";

import { useContext } from "react";
import { ThemeContext } from "../../App";

function Footer() {
  const lightSwitch = useContext(ThemeContext);

  const urlSwitch = () => {
    return lightSwitch.theme === "dark" ? giphy_banner : giphy_banner_white;
  };

  return (
    <footer className={styles.headerClass}>
      <a href="https://giphy.com/" target="_blank" rel="noreferrer">
        <img src={urlSwitch()} alt="giphy banner" loop={true} />
      </a>
    </footer>
  );
}

export default Footer;
