import React from "react";
import styles from "./RelatedArticles.module.css";
import ArticleCard from "./ArticleCard";

function RelatedArticles({ title, articles }) {
  return (
    <section className={styles.relatedArticlesSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.articlesGrid}>
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            author={article.author}
            imageSrc={article.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}

export default RelatedArticles;
