"use client";
import React from "react";
import styles from "./CallToAction.module.css";
import { Link } from 'react-router-dom';


function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>Rate Us!</h2>
        <div className={styles.ctaButtons}>
        <Link to="/register" className={styles.registerButton}>
            Register
        </Link>

          <a href="#about" className={styles.aboutButton}>
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
