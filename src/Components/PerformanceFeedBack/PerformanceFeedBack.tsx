import React from "react";
import styles from "./PerformanceFeedBack.module.scss";
import TextField from "@mui/material/TextField";

const PerformanceFeedBack = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Your performance feedback</p>
        <div>
          <TextField
            defaultValue="2021-05-24"
            id="date"
            InputLabelProps={{
              shrink: true,
            }}
            label="Month"
            sx={{ width: 220 }}
            type="date"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PerformanceFeedBack;
