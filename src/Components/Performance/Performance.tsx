/* eslint-disable react/jsx-max-props-per-line */
import React from "react";
import styles from "./Performance.module.scss";
import PerformanceHeaders from "../PerformanceHeaders/PerformanceHeaders";
import PerformanceDetails from "../PerformanceDetails/PerformanceDetails";

const Performance = () => {
  return (
    <div className={styles.performanceWrapper}>
      <PerformanceHeaders />
      <hr />
      <PerformanceDetails />
    </div>
  );
};

export default Performance;
