import React, { useState, useEffect } from "react";
import styles from "./PerformanceFeedBack.module.scss";
import { PerformanceData } from "../../Constants";
import IPerformance from "../../dto/IPerformance";
import Icon from "../Icons/icon";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CurrentYear from "../CurrentYear/CurrentYear";
import useClickOutside from "../../CustomHooks/useClickOutSide";

const PerformanceFeedBack = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>();
  const [length, setLength] = useState<number>(0);
  const [yearsToShow, setYearsToShow] = useState<Array<any>>([]);
  const years = (startYear?: any) => {
    const currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1990;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  };
  const nextYear = (year: any) => {
    if (year !== yearsToShow[yearsToShow.length - 1]) {
      setCurrentYear(year + 1);
    }
  };
  const previousYear = (year: any) => {
    if (year !== yearsToShow[0]) {
      setCurrentYear(year - 1);
    }
  };

  const monthData = ["January", "February", "March", "April"];
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
        <div
          className={styles.date}
          onClick={() => setShowDropDown(!showDropDown)}
          ref={dropdownNode}
        >
          <p>April 2020</p>
          <Icon name="arrowDown" />
        </div>
      </div>
      {showDropDown && (
        <div className={styles.dropdown}>
          <div className={styles.dropdown_date}>
            <p>April 2020</p>
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
              monthData.map((e, i) => (
                <CustomDatePicker currentYear={currentYear} key={e} month={e} />
              ))}
          </div>
        </div>
      )}
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
                    <p>April 2020</p>
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
