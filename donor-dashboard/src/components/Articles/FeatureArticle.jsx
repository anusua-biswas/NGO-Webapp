import React from "react";
import styles from "./FeatureArticle.module.css";

function FeatureArticle({ title, author, imageSrc, content }) {
  return (
    <article className={styles.articleContainer}>
      <header className={styles.articleHeader}>
        <h2 className={styles.articleTitle}>{title}</h2>
        <p className={styles.articleAuthor}>{author}</p>
      </header>

      <img src={imageSrc} alt="Story image" className={styles.storyImage} />

      <div className={styles.articleContent}>{content}</div>

      <a href="#" className={styles.readMoreButton}>
        Read More
      </a>
    </article>
  );
}

export default FeatureArticle;
