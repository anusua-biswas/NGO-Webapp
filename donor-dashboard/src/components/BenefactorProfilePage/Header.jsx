"use client";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
                <a href="/LandingPage"  className={styles.navLink}>
                Home
                </a>
      </h1>
      <nav className={styles.navigation}>
        <a href="/Articles" className={styles.navLink}>
          Articles
        </a>
        <a href="/BenefactorPage" className={styles.navLink}>
          Benefactor
        </a>
        <a href="/Beneficiaries" className={styles.navLink}>
          Beneficiary
        </a>
        <a href="/AboutUs" className={styles.navLink}>
          About Us
        </a>
        <button className={styles.profileButton}>Profile</button>
      </nav>
      <button className={styles.menuButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[24px] h-[24px]"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
