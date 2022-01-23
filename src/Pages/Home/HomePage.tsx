import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import styles from "./HomePage.module.scss";
import Container from "@mui/material/Container";

const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <Container maxWidth="lg">
        <Navbar />
      </Container>
    </div>
  );
};

export default HomePage;
