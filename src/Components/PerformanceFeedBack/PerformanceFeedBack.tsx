/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from "react";
import styles from "./PerformanceFeedBack.module.scss";
import { PerformanceData } from "../../Constants";
import IPerformance from "../../dto/IPerformance";
import Icon from "../Icons/icon";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CurrentYear from "../CurrentYear/CurrentYear";
import useClickOutside from "../../CustomHooks/useClickOutSide";

const PerformanceFeedBack = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [currentYear, setCurrentYear] = useState<number>();
  const [length, setLength] = useState<number>(0);
  const [yearsToShow, setYearsToShow] = useState<Array<any>>([]);

  //The function below is to get years from 1990 - present
  const years = (startYear?: number) => {
    const currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1990;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  };

  //Get the next year
  const nextYear = (year: number) => {
    if (year !== yearsToShow[yearsToShow.length - 1]) {
      setCurrentYear(year + 1);
    }
  };

  //Get the previous year
  const previousYear = (year: number) => {
    if (year !== yearsToShow[0]) {
      setCurrentYear(year - 1);
    }
  };

  const monthData = ["January", "February", "March", "April"];

  //Ref Node to detect any click outside the parent element.
  //A custom hook was created to listen to changes in dom node.
  const dropdownNode = useClickOutside(() => {
    setShowDropDown(false);
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const data: any = years();
      setYearsToShow(data);
    }

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (yearsToShow.length > 0) {
      setLength(yearsToShow.length - 1);
      if (length !== 0) {
        setCurrentYear(yearsToShow[length]);
      }
    }
  }, [yearsToShow, length]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Your performance feedback</p>
        <div>
          <div
            className={styles.date}
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <p>April {currentYear}</p>
            <Icon name="arrowDown" />
          </div>
        </div>
        {showDropDown && (
          <div className={styles.dropdown} ref={dropdownNode}>
            <div className={styles.dropdown_date}>
              <p>April {currentYear}</p>
            </div>
            <div className={styles.customDatePickerWrapper}>
              <CurrentYear
                currentYear={currentYear}
                nextYear={nextYear}
                previousYear={previousYear}
              />
            </div>
            <div className={styles.customDatePickerWrapper}>
              {monthData &&
                monthData.map((month) => (
                  <CustomDatePicker
                    currentYear={currentYear}
                    key={month} //month was used because index can be problematic in the future
                    month={month}
                  />
                ))}
            </div>
          </div>
        )}
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
                {data.id === 2 && (
                  <div className={styles.average}>
                    <p>April {currentYear}</p>
                    <p>3.5</p>
                  </div>
                )}
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
