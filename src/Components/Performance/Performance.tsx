/* eslint-disable react/jsx-max-props-per-line */
import React from "react";
import styles from "./Performance.module.scss";
import PerformanceHeaders from "../PerformanceHeaders/PerformanceHeaders";

const Performance = () => {
  return (
    <div className={styles.performanceWrapper}>
      <PerformanceHeaders />
      <hr />
    </div>
  );
};

export default Performance;
