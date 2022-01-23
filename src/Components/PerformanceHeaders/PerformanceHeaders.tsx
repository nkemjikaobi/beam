/* eslint-disable react/jsx-max-props-per-line */
import React from "react";
import styles from "./PerformanceHeaders.module.scss";
import Typography from "@mui/material/Typography";

const PerformanceHeaders = () => {
  return (
    <div className={styles.performanceWrapper__titles}>
      <Typography component="h6" variant="h6">
        Goals
      </Typography>
      <Typography className={styles.active} component="h6" variant="h6">
        Performance
      </Typography>
    </div>
  );
};

export default PerformanceHeaders;
