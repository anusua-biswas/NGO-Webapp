import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <h2 className={styles.footerLogo}>WebApp</h2>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}>
            <i className={styles.icon}>FB</i>
          </a>
          <a href="#" className={styles.socialIcon}>
            <i className={styles.icon}>TW</i>
          </a>
          <a href="#" className={styles.socialIcon}>
            <i className={styles.icon}>EM</i>
          </a>
          <a href="#" className={styles.socialIcon}>
            <i className={styles.icon}>IG</i>
          </a>
        </div>
      </div>

      <nav className={styles.footerNav}>
        <div className={styles.navColumn}>
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

        <div className={styles.navColumn}>
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

        <div className={styles.navColumn}>
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
      </nav>
    </footer>
  );
}

export default Footer;
