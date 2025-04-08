import React from "react";
import styles from "./AboutUs.module.css";

export const FooterColumn = ({ className, itemsClassName }) => {
  return (
    <div className={className}>
      <nav className={itemsClassName}>
        <h3 className={styles.topic}>Topic</h3>
        <a href="/page-1" className={styles.page}>
          Page
        </a>
        <a href="/page-2" className={styles.page}>
          Page
        </a>
        <a href="/page-3" className={styles.page}>
          Page
        </a>
      </nav>
    </div>
  );
};
