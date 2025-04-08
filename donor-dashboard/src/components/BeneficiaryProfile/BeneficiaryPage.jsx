"use client";
import React from "react";
import styles from "./BeneficiaryPage.module.css";
import Header from "./Header";
import BeneficiaryProfile from "./BeneficiaryProfile";
import TopStories from "./TopStories";
import Footer from "./Footer";

const BeneficiaryPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainContent}>
        <BeneficiaryProfile />
        <TopStories />
      </main>
      <Footer />
    </div>
  );
};

export default BeneficiaryPage;


