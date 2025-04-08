"use client";
import React from "react";
import styles from "./Footer.module.css";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h2 className={styles.logo}>WebApp</h2>
        <SocialIcons />
        <nav className={styles.navigation}>
          {[1, 2, 3].map((section) => (
            <div key={section} className={styles.navSection}>
              <h3 className={styles.navTitle}>Topic</h3>
              <a href="#" className={styles.navLink}>
                Page
              </a>
              <a href="#" className={styles.navLink}>
                Page
              </a>
              <a href="#" className={styles.navLink}>
                Page
              </a>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
