import React from "react";
import styles from "./AboutUs.module.css";
import { SocialIcons } from "./SocialIcons";
import { FooterColumn } from "./FooterColumn";

export const Footer = () => {
  return (
    <footer className={styles.navigationFooter}>
      <hr className={styles.divider} />
      <div className={styles.div3}>
        <div className={styles.div4}>
          <h2 className={styles.webApp2}>WebApp</h2>
          <SocialIcons />
        </div>
        <div className={styles.div5}>
          <div className={styles.div6}>
            <FooterColumn
              className={styles.column3}
              itemsClassName={styles.items2}
            />
            <FooterColumn
              className={styles.column4}
              itemsClassName={styles.items3}
            />
            <FooterColumn
              className={styles.column5}
              itemsClassName={styles.items4}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
