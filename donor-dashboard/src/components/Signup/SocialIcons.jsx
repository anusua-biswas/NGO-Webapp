import React from "react";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <a href="#facebook" className={styles.icon} aria-label="Facebook">
        <i className={styles.facebook} />
      </a>
      <a href="#linkedin" className={styles.icon} aria-label="LinkedIn">
        <i className={styles.linkedin} />
      </a>
      <a href="#youtube" className={styles.icon} aria-label="YouTube">
        <i className={styles.youtube} />
      </a>
      <a href="#instagram" className={styles.icon} aria-label="Instagram">
        <i className={styles.instagram} />
      </a>
    </div>
  );
};

export default SocialIcons;
