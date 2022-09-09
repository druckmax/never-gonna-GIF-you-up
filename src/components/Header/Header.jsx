import React from "react";
import giphy_banner from "./img/giphy_banner.gif";
import giphy_banner_white from "./img/giphy_banner_white.gif";
import styles from "./Header.module.scss";

import { useContext } from "react";
import { MainContext } from "../../context/context";

function Footer() {
  const lightSwitch = useContext(MainContext);

  const urlSwitch = () => {
    return lightSwitch.theme === "dark" ? giphy_banner : giphy_banner_white;
  };

  return (
    <header className={styles.headerClass}>
      <a href="https://giphy.com/" target="_blank" rel="noreferrer">
        <img src={urlSwitch()} alt="giphy banner" loop={true} />
      </a>
    </header>
  );
}

export default Footer;
