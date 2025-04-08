import React from "react";
import styles from "./BeneficiaryCard.module.css";

export const BeneficiaryCard = ({
  name,
  description,
  image,
  large = false,
}) => {
  return (
    <article className={`${styles.card} ${large ? styles.cardLarge : ""}`}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.engageButton}>Engage</button>
      </div>
    </article>
  );
};
