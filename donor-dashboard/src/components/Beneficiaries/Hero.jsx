import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <header className={styles.hero}>
      <img
        src="/images/angels-for-humanity-hwBAdp-nruY-unsplash.jpg"
        alt="Hero background"
        className={styles.heroBackground}
      />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>Top Beneficiaries</h2>
          <p className={styles.subtitle}>Subheading with description</p>
          <button className={styles.engageButton}>Engage</button>
        </div>
      </div>
    </header>
  );
};
