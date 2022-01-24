/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-param-reassign */
import React from "react";
import styles from "./CurrentYear.module.scss";
import Icon from "../Icons/icon";

interface ICurrentYear {
  currentYear: number | undefined;
  nextYear: Function;
  previousYear: Function;
}

const CurrentYear: React.FunctionComponent<ICurrentYear> = ({
  currentYear,
  nextYear,
  previousYear,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon} onClick={() => previousYear(currentYear)}>
        <Icon name="lessThan" />
      </div>
      <p>{currentYear}</p>
      <div className={styles.icon} onClick={() => nextYear(currentYear)}>
        <Icon name="greaterThan" />
      </div>
    </div>
  );
};

export default CurrentYear;
