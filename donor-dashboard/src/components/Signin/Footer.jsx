import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.logo}>WebApp</h2>

        <div className={styles.socialLinks}>
          <a
            href="https://facebook.com"
            className={styles.socialLink}
            aria-label="Visit our Facebook page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8H7V12H9V20H13V12H15L16 8H13V6C13 5.204 13.597 5 14 5H16V1H13C10.243 1 9 2.343 9 5V8Z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            className={styles.socialLink}
            aria-label="Visit our LinkedIn page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 3C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H4ZM8 17H5V10H8V17ZM6.5 8.5C5.67 8.5 5 7.83 5 7C5 6.17 5.67 5.5 6.5 5.5C7.33 5.5 8 6.17 8 7C8 7.83 7.33 8.5 6.5 8.5ZM19 17H16V13C16 12.45 15.55 12 15 12H14C13.45 12 13 12.45 13 13V17H10V10H13V11.25C13.5 10.75 14.25 10 15.5 10C17.43 10 19 11.57 19 13.5V17Z" />
            </svg>
          </a>

          <a
            href="https://youtube.com"
            className={styles.socialLink}
            aria-label="Visit our YouTube channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a2.833 2.833 0 0 0-1.992-2.007C19.158 3.5 12 3.5 12 3.5s-7.158 0-9.506.68A2.833 2.833 0 0 0 .502 6.186 29.708 29.708 0 0 0 0 12c0 1.965.145 3.91.502 5.814a2.833 2.833 0 0 0 1.992 2.007C4.842 20.5 12 20.5 12 20.5s7.158 0 9.506-.68a2.833 2.833 0 0 0 1.992-2.007A29.708 29.708 0 0 0 24 12c0-1.965-.145-3.91-.502-5.814ZM9.75 15.5V8.5l6.5 3.5-6.5 3.5Z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            className={styles.socialLink}
            aria-label="Visit our Instagram profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2C3.686 2 1 4.686 1 8V16C1 19.314 3.686 22 7 22H17C20.314 22 23 19.314 23 16V8C23 4.686 20.314 2 17 2H7ZM12 7C14.761 7 17 9.239 17 12C17 14.761 14.761 17 12 17C9.239 17 7 14.761 7 12C7 9.239 9.239 7 12 7ZM12 9C10.343 9 9 10.343 9 12C9 13.657 10.343 15 12 15C13.657 15 15 13.657 15 12C15 10.343 13.657 9 12 9ZM19 6C19.552 6 20 6.448 20 7C20 7.552 19.552 8 19 8C18.448 8 18 7.552 18 7C18 6.448 18.448 6 19 6Z" />
            </svg>
          </a>
        </div>

        <nav className={styles.navigation}>
          {[1, 2, 3].map((section) => (
            <div key={section} className={styles.navSection}>
              <h3 className={styles.navTitle}>Topic</h3>
              <a href={`/page-${section}-1`} className={styles.navLink}>
                Page 1
              </a>
              <a href={`/page-${section}-2`} className={styles.navLink}>
                Page 2
              </a>
              <a href={`/page-${section}-3`} className={styles.navLink}>
                Page 3
              </a>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
