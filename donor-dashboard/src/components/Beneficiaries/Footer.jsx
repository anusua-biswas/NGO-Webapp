import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.divider} />
      <div className={styles.content}>
        <div className={styles.branding}>
          <h2 className={styles.logo}>WebApp</h2>
          <div className={styles.socialLinks}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4330bd5432134a4caee1ff0c5035102b0c58a2a7?placeholderIfAbsent=true&apiKey=8ca953f9337749bba5ccd2e7e6561214"
              alt="Social"
              className={styles.socialIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1a6c13f3c32e3dbdd0a56b79395011cace373f1?placeholderIfAbsent=true&apiKey=8ca953f9337749bba5ccd2e7e6561214"
              alt="Social"
              className={styles.socialIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbe9046dc0ba1172345864d894ef6a2668a02332?placeholderIfAbsent=true&apiKey=8ca953f9337749bba5ccd2e7e6561214"
              alt="Social"
              className={styles.socialIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0981d6a75fb6305b9b63010f7dfc0c39395ee417?placeholderIfAbsent=true&apiKey=8ca953f9337749bba5ccd2e7e6561214"
              alt="Social"
              className={styles.socialIcon}
            />
          </div>
        </div>
        <nav className={styles.navigation}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Topic</h3>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Topic</h3>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Topic</h3>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};
