import React from "react";
import styles from './Navbar.module.scss'
import { NavLink } from "react-router-dom";

function NavbarBtn({text, link, style, route}) {
  return (
      <div className={styles.borderWrapper}>
        <NavLink to={route} className={style} href={link}>
          {text}
        </NavLink>
      </div>
  );
}

export default NavbarBtn;
