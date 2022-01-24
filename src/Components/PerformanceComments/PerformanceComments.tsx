/* eslint-disable react/jsx-max-props-per-line */
import React from "react";
import styles from "./PerformanceComments.module.scss";
import Icon from "../Icons/icon";
import { PerformanceCommentsData } from "../../Constants";
import IComments from "../../dto/IComments";
import { Typography } from "@mui/material";
import proflePic from "../../Assets/images/png/profilePng.png";

const PerformanceComments = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>April 2020</p>
        <div className={styles.header__right}>
          <p>3.5</p>
          <p>Exceeded expectations</p>
          <Icon name="greenIndicator" />
          <p>3.5%</p>
        </div>
      </div>
      <div className={styles.body}>
        {PerformanceCommentsData.map((data: IComments) => {
          return (
            <div className={styles.item} key={data.id}>
              <Typography component="h6" variant="h6">
                {data.title}
              </Typography>
              <p>{data.body}</p>
              <hr />
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        <div className={styles.left}>
          <div />
          <p>Ekene Uzomiachi</p>
          <Icon name="caret" />
        </div>
        <p>Wednesday, Apr. 25</p>
      </div>
    </div>
  );
};

export default PerformanceComments;
