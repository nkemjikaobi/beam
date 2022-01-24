import React from "react";
import styles from "./PerformanceComments.module.scss";
import Icon from "../Icons/icon";

const PerformanceComments = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>April 2020</p>
        <div className={styles.header__right}>
          <p>3.5</p>
          <p>Exceeded expectations</p>
          <Icon name="greenIndicator" />
          <p>3.5%</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceComments;
