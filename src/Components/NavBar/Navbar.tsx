import React from "react";
import styles from "./Navbar.module.scss";
import Icon from "../Icons/icon";

const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.logo}>
        <Icon name="logo" />
        <p>Orangeboat</p>
        <Icon name="arrowDown" />
      </div>
      <div className={styles.radio}>
        <div className={styles.active}>You</div>
        <div>Your Team</div>
      </div>
      <div className={styles.user}>
        <div>EU</div>
        <p>Ekene</p>
        <Icon name="arrowDown" />
      </div>
    </div>
  );
};

export default Navbar;
