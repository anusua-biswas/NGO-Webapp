import React from "react";
import styles from "./StatisticItem.module.css";

export const StatisticItem = ({ icon, title, description }) => {
  return (
    <div className={styles.statisticItem}>
      <img src={icon} alt="" className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
