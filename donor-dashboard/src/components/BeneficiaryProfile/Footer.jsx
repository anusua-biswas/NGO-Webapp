import React from "react";
import styles from "./Footer.module.css";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <h2 className={styles.logo}>WebApp</h2>
        <SocialIcons />
      </div>
      <nav className={styles.footerNav}>
        {[1, 2, 3].map((index) => (
          <div key={index} className={styles.navColumn}>
            <h3 className={styles.navTitle}>Topic</h3>
            <ul className={styles.navList}>
              {[1, 2, 3].map((item) => (
                <li key={item}>
                  <a href="#page" className={styles.navLink}>
                    Page
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
