"use client";
import React from "react";
import styles from "./ArticlesSection.module.css";

function ArticlesSection() {
  return (
    <section className={styles.articlesSection}>
      <h2 className={styles.sectionTitle}>Articles</h2>
      <div className={styles.articlesGrid}>
        <article className={styles.articleCard}>
          <img
            src="/images/gestures-6842774_1280.jpg"
            alt="Stories 1"
            className={styles.articleImage}
          />
          <div className={styles.articleInfo}>
            <h3 className={styles.articleTitle}>Stories 1</h3>
            <p className={styles.articleDescription}>
              Body text for whatever you'd like to add more to the subheading.
            </p>
          </div>
        </article>

        <article className={styles.articleCard}>
          <img
            src="/images/edward-howell-8iicvnrArZ8-unsplash.jpg"
            alt="Stories 2"
            className={styles.articleImage}
          />
          <div className={styles.articleInfo}>
            <h3 className={styles.articleTitle}>Stories 2</h3>
            <p className={styles.articleDescription}>
              Body text for whatever you'd like to expand on the main point.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ArticlesSection;
