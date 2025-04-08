"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Header from "./Header";
import ProfileForm from "./ProfileForm";
import Footer from "./Footer";

const InputDesign = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <section className={styles.profileSection}>
        <h1 className={styles.pageTitle}>Create Your Profile</h1>
        <h2 className={styles.pageSubtitle}>Beneficiary</h2>
        <div className={styles.formContainer}>
          <ProfileForm />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default InputDesign;
