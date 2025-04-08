"use client";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import styles from "./Header.module.css";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <h2>WebApp</h2>
      </h1>
      <Button variant="secondary" onClick={() => navigate("/")}>
        Sign Up
      </Button>
    </header>
  );
};

export default Header;
