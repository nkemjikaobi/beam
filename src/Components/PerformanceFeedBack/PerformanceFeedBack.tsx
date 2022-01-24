import React from "react";
import styles from "./PerformanceFeedBack.module.scss";
import TextField from "@mui/material/TextField";
import { PerformanceData } from "../../Constants";
import IPerformance from "../../dto/IPerformance";
import Icon from "../Icons/icon";

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
      <div className={styles.horizontalWrapper}>
        <p>Values</p>
        <Icon name="horizontalRule" />
      </div>
      <div className={styles.bodyWrapper}>
        <div className={styles.body}>
          {PerformanceData.map((data: IPerformance) => {
            return (
              <div
                className={styles.item}
                key={data.id}
                style={{
                  backgroundColor: `${data.backgroundColor}`,
                  color: `${data.textColor}`,
                  border: `3px solid ${data.backgroundColor}`,
                }}
              >
                <div>
                  <Icon name={data.firstIcon} />
                  <p>{data.firstText}</p>
                </div>
                <div>
                  <Icon name={data.secondIcon} />
                  <p>{data.secondText}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.productivityWrappper}>
          <Icon name="verticalRule" />
          <p>Productivity</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceFeedBack;
