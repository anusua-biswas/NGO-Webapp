"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Header from "./Header";
import BenefactorProfile from "./BenefactorProfile";
import TopStories from "./TopStories";
import Footer from "./Footer";

function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <Header />
        <div className={styles.mainContent}>
          <BenefactorProfile />
          <TopStories />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default InputDesign;
