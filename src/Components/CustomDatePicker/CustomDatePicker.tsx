import React, { useState } from "react";
import styles from "./CustomDatePicker.module.scss";

interface ICurrentDatePicker {
  currentYear: number | undefined;
  month: string;
}
const CustomDatePicker: React.FunctionComponent<ICurrentDatePicker> = ({
  currentYear,
  month,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <p>
          {month} {currentYear}
        </p>
        <input
          onChange={(e) => console.log(e.target.value)}
          type="checkbox"
          value={`${month} ${currentYear}`}
        />
      </div>
    </>
  );
};

export default CustomDatePicker;
