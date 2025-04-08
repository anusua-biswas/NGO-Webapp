import React from "react";
import styles from "./ArticleCard.module.css";

function ArticleCard({ title, author, imageSrc }) {
  return (
    <article className={styles.cardContainer}>
      <img src={imageSrc} alt="Related article" className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardAuthor}>{author}</p>
      </div>
    </article>
  );
}

export default ArticleCard;
