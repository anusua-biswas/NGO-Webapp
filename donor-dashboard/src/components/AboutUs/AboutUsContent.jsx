import React from "react";
import styles from "./AboutUs.module.css";

export const AboutUsContent = () => {
  return (
    <main className={styles.div}>
      <div className={styles.div2}>
        <section className={styles.column}>
          <div className={styles.copy}>
            <h2 className={styles.aboutUs3}>About Us</h2>
            <p className={styles.subheadingfordescriptionorinstructions}>
              Subheading for description or instructions
            </p>
            <div className={styles.paragraphContainer}>
              <p className={styles.paragraph}>
                Body text for your whole article or post. We'll put in some
                lorem ipsum to show how a filled-out page might look:
              </p>
              <p className={styles.paragraph}>
                Excepteur efficient emerging, minim veniam anim aute carefully
                curated Ginza conversation exquisite perfect nostrud nisi
                intricate Content. Qui international first-class nulla ut.
                Punctual adipisicing, essential lovely queen tempor eiusmod
                irure. Exclusive izakaya charming Scandinavian impeccable aute
                quality of life soft power pariatur Melbourne occaecat
                discerning. Qui wardrobe aliquip, et Porter destination Toto
                remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </p>
            </div>
          </div>
        </section>
        <aside className={styles.column2}>
        <aside className={styles.column2}>
  <div className={styles.imageContainer}>
    <img
      src="/images/jeffrey-riley-dsN1oZVba48-unsplash.jpg"
      alt="About Us"
      className={styles.img}
    />
  </div>
</aside>

        </aside>
      </div>
    </main>
  );
};
