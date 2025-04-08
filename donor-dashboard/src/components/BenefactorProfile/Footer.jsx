import React from "react";
import styles from "./InputDesign.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h2 className={styles.footerLogo}>WebApp</h2>
        <div className={styles.socialIcons}>
          <a href="#facebook" className={styles.socialIcon}>
            <i className={styles.socialIconI}></i>
          </a>
          <a href="#linkedin" className={styles.socialIcon}>
            <i className={styles.socialIconI}></i>
          </a>
          <a href="#youtube" className={styles.socialIcon}>
            <i className={styles.socialIconI}></i>
          </a>
          <a href="#instagram" className={styles.socialIcon}>
            <i className={styles.socialIconI}></i>
          </a>
        </div>
        <nav className={styles.footerLinks}>
          <div className={styles.linkGroup}>
            <h3 className={styles.linkGroupTitle}>Topic</h3>
            <a href="#page1" className={styles.linkItem}>
              Page
            </a>
            <a href="#page2" className={styles.linkItem}>
              Page
            </a>
            <a href="#page3" className={styles.linkItem}>
              Page
            </a>
          </div>
          <div className={styles.linkGroup}>
            <h3 className={styles.linkGroupTitle}>Topic</h3>
            <a href="#page4" className={styles.linkItem}>
              Page
            </a>
            <a href="#page5" className={styles.linkItem}>
              Page
            </a>
            <a href="#page6" className={styles.linkItem}>
              Page
            </a>
          </div>
          <div className={styles.linkGroup}>
            <h3 className={styles.linkGroupTitle}>Topic</h3>
            <a href="#page7" className={styles.linkItem}>
              Page
            </a>
            <a href="#page8" className={styles.linkItem}>
              Page
            </a>
            <a href="#page9" className={styles.linkItem}>
              Page
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
