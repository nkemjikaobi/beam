import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import styles from "./HomePage.module.scss";
import Container from "@mui/material/Container";
import Greetings from "../../Components/Greetings/Greetings";
import Performance from "../../Components/Performance/Performance";

const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <Container maxWidth="lg">
        <Navbar />
        <Greetings name="Ekene" time="Good Morning" />
        <Performance />
      </Container>
    </div>
  );
};

export default HomePage;
