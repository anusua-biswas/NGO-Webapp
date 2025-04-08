import React from "react";
import styles from "./TopStories.module.css";
import Button from "./Button";

const TopStories = () => {
  return (
    <section className={styles.storiesSection}>
      <h2 className={styles.title}>Top Stories</h2>
      <article className={styles.storyContent}>
        <h3 className={styles.storyTitle}>Story 1 Title</h3>
        <p className={styles.author}>Author</p>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/753970ff6aec764099adf1e6e318d2a8648bc411"
          alt="Story"
          className={styles.storyImage}
        />
        <div className={styles.storyText}>
          <p>
            Body text for your whole article or post. We'll put in some lorem
            ipsum to show how a filled-out page might look:
          </p>
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
          <p>
            Exquisite sophisticated iconic cutting-edge laborum deserunt Addis
            Ababa esse bureaux cupidatat id minim. Sharp classic the best
            commodo nostrud delightful. Conversation aute Rochester id. Qui sunt
            remarkable deserunt intricate airport handsome K-pop excepteur
            classic esse Asia-Pacific laboris.
          </p>
        </div>
        <Button variant="primary" className={styles.readMoreButton}>
          Read More
        </Button>
      </article>
    </section>
  );
};

export default TopStories;
