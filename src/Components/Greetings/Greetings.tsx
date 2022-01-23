import React from "react";
import styles from "./Greetings.module.scss";
import Typography from "@mui/material/Typography";

interface IGreetings {
  name: string;
  time: string;
}
const Greetings: React.FunctionComponent<IGreetings> = ({ name, time }) => {
  return (
    <div className={styles.greetings}>
      <Typography component="h5" variant="h5">
        {time}, {name}.
      </Typography>
    </div>
  );
};

export default Greetings;
