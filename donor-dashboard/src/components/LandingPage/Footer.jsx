"use client";
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h2 className={styles.footerLogo}>WebApp</h2>

        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <div className={styles.socialIcon} />
          </a>
          <a href="#" className={styles.socialLink}>
            <div className={styles.socialIcon} />
          </a>
          <a href="#" className={styles.socialLink}>
            <div className={styles.socialIcon} />
          </a>
          <a href="#" className={styles.socialLink}>
            <div className={styles.socialIcon} />
          </a>
        </div>

        <div className={styles.footerLinks}>
          <nav className={styles.footerNav}>
            <h3 className={styles.footerNavTitle}>Topic</h3>
            <a href="#" className={styles.footerNavLink}>
              Page
            </a>
            <a href="#" className={styles.footerNavLink}>
              Page
            </a>
            <a href="#" className={styles.footerNavLink}>
              Page
            </a>
          </nav>

          <nav className={styles.footerNav}>
            <h3 className={styles.footerNavTitle}>Topic</h3>
            <a href="#" className={styles.footerNavLink}>
              Page
            </a>
            <a href="#" className={styles.footerNavLink}>
              Page
            </a>
            <a href="#" className={styles.footerNavLink}>
              Page
            </a>
          </nav>

          <nav className={styles.footerNav}>
            <h3 className={styles.footerNavTitle}>Topic</h3>
            <a href="#" className={styles.footerNavLink}>
              Page
            </a>
            <a href="#" className={styles.footerNavLink}>
              Page
            </a>
            <a href="#" className={styles.footerNavLink}>
              Page
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
