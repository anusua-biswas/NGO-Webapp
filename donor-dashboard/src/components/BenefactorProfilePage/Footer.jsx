"use client";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h2 className={styles.logo}>WebApp</h2>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px] fill-[#828282]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
            </svg>
          </a>
          <a href="#" className={styles.socialLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px] fill-[#828282]"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
            </svg>
          </a>
          <a href="#" className={styles.socialLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px] fill-[#828282]"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="#" className={styles.socialLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px] fill-[#828282]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
            </svg>
          </a>
        </div>
        <div className={styles.linksGrid}>
          <nav className={styles.linkColumn}>
            <h3 className={styles.linkTitle}>Topic</h3>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
          </nav>
          <nav className={styles.linkColumn}>
            <h3 className={styles.linkTitle}>Topic</h3>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
          </nav>
          <nav className={styles.linkColumn}>
            <h3 className={styles.linkTitle}>Topic</h3>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
            <a href="#" className={styles.link}>
              Page
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
