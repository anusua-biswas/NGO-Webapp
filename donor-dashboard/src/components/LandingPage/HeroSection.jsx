"use client";
import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>
          Strategic Visibility &amp; Trust-Building Platform for NGOs
        </h2>
        <a href="#register" className={styles.registerButton}>
          Register
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
