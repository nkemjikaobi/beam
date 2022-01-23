import React from "react";
import PerformanceComments from "../PerformanceComments/PerformanceComments";
import PerformanceFeedBack from "../PerformanceFeedBack/PerformanceFeedBack";
import styles from "./PerformanceDetails.module.scss";

const PerformanceDetails = () => {
  return (
    <div className={styles.wrapper}>
      <PerformanceFeedBack />
      <PerformanceComments />
    </div>
  );
};

export default PerformanceDetails;
