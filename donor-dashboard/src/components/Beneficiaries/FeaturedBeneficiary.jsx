import React from "react";
import styles from "./FeaturedBeneficiary.module.css";

export const FeaturedBeneficiary = ({
  name,
  description,
  image,
  imagePosition = "right",
}) => {
  const contentOrder =
    imagePosition === "right" ? styles.contentLeft : styles.contentRight;
  const imageOrder =
    imagePosition === "right" ? styles.imageRight : styles.imageLeft;

  return (
    <section className={styles.container}>
      <div className={`${styles.content} ${contentOrder}`}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <button className={styles.engageButton}>Engage</button>
          <button className={styles.followButton}>Follow</button>
        </div>
      </div>
      <div className={`${styles.imageContainer} ${imageOrder}`}>
        <img src={image} alt={name} className={styles.image} />
      </div>
    </section>
  );
};
