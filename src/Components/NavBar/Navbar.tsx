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
            
        </div>
        <div className={styles.user}>
          <Icon name="logo" />
          <p>Vamoss</p>
          <Icon name="arrowDown" />
      </div>
      <div>
        kfjdf
        ln kv
        
      </div>
    </div>
  )
};

export default Navbar;
