"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const TopStories = () => {
  return (
    <section className={styles.storiesSection}>
      <h2 className={styles.storiesTitle}>Top Stories</h2>
      <article className={styles.storyContainer}>
        <header className={styles.storyHeader}>
          <h3 className={styles.storyTitle}>Story 1 Title</h3>
          <p className={styles.storyAuthor}>Author</p>
        </header>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd973e57d5804f4102290041396e8774d57c7ebd"
          alt="Story"
          className={styles.storyImage}
        />
        <div className={styles.storyContent}>
          <p>
            Body text for your whole article or post. We'll put in some lorem
            ipsum to show how a filled-out page might look:
          </p>
          <br />
          <p>
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud nisi intricate
            Content. Qui international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod irure. Exclusive
            izakaya charming Scandinavian impeccable aute quality of life soft
            power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
            et Porter destination Toto remarkable officia Helsinki excepteur
            Basset hound. Zürich sleepy perfect consectetur.
          </p>
          <br />
          <p>
            Exquisite sophisticated iconic cutting-edge laborum deserunt Addis
            Ababa esse bureaux cupidatat id minim. Sharp classic the best
            commodo nostrud delightful. Conversation aute Rochester id. Qui sunt
            remarkable deserunt intricate airport handsome K-pop excepteur
            classic esse Asia-Pacific laboris.
          </p>
        </div>
        <button className={styles.readMoreButton}>Read More</button>
      </article>
    </section>
  );
};

export default TopStories;
