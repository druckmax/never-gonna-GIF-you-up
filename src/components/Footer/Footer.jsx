import React from "react";
import giphy_banner from "./img/giphy_banner.gif";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footerClass}>
      <a href="https://giphy.com/" target='_blank' rel="noreferrer">
        <img src={giphy_banner} alt="giphy banner" loop={true} />
      </a>
    </footer>
  );
}

export default Footer;
