"use client";
import React from "react";
import styles from "./ArticlesPage.module.css";
import Header from "./Header";
import FeatureArticle from "./FeatureArticle";
import RelatedArticles from "./RelatedArticles";
import Footer from "./Footer";

function ArticlesPage() {
  return (
    <div className={styles.pageContainer}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Articles</h1>

        <FeatureArticle
          title="Story 1 Title"
          author="Author"
          imageSrc="/images/hennie-stander-tUWfRQlJTeE-unsplash.jpg"
          content={
            <>
              <p>
                Body text for your whole article or post. We'll put in some
                lorem ipsum to show how a filled-out page might look:
              </p>
              <p>
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
              <p>
                Exquisite sophisticated iconic cutting-edge laborum deserunt
                Addis Ababa esse bureaux cupidatat id minim. Sharp classic the
                best commodo nostrud delightful. Conversation aute Rochester id.
                Qui sunt remarkable deserunt intricate airport handsome K-pop
                excepteur classic esse Asia-Pacific laboris.
              </p>
            </>
          }
        />

        <FeatureArticle
          title="Story 1 Title"
          author="Author"
          imageSrc="/images/nik-D3CaHv4BNYM-unsplash.jpg"
          content={
            <>
              <p>
                Excepteur efficient emerging, minim veniam anim cloying aute
                carefully curated gauche. Espresso exquisite perfect nostrud
                nisi intricate. Punctual adipisicing Borzoi, essential lovely
                tempor eiusmod irure. Exclusive izakaya charming Quezon City
                impeccable aute quality of life soft power pariatur occaecat
                discerning. Qui wardrobe aliquip, et Amadeus rock opera.
              </p>
              <p>
                Exquisite sophisticated iconic cutting-edge laborum deserunt
                esse bureaux cupidatat id minim. Sharp classic the best commodo
                nostrud delightful. Conversation aute wifey id. Qui sunt
                remarkable deserunt intricate airport excepteur classic esse
                riot girl.
              </p>
            </>
          }
        />

        <RelatedArticles
          title="Related articles or posts"
          articles={[
            {
              title: "Title",
              author: "Author",
              imageSrc:
                "/images/marija-zaric-DF54Ar7gOvk-unsplash.jpg",
            },
            {
              title: "Title",
              author: "Author",
              imageSrc:
                "/images/janay-peters-ZRjKE2D-GKU-unsplash.jpg",
            },
            {
              title: "Title",
              author: "Author",
              imageSrc:
                "/images/kalea-morgan-8YD07wqgxuc-unsplash.jpg",
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}

export default ArticlesPage;
