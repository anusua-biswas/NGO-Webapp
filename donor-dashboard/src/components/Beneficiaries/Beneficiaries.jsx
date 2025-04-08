"use client";
import React from "react";
import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { FeaturedBeneficiary } from "./FeaturedBeneficiary";
import { BeneficiaryCard } from "./BeneficiaryCard";
import { StatisticItem } from "./StatisticItem";
import { Footer } from "./Footer";
import styles from "./Beneficiaries.module.css";

const Beneficiaries = () => {
  return (
    <main className={styles.beneficiaries}>
      <div className={styles.container}>
      <Navigation />     
        <Hero />

        <div className={styles.content}>
          <FeaturedBeneficiary
            name="Beneficiary Name"
            description="A subheading for this section, as long or as short as you like"
            image="/images/h-c-vi-n-cham-soc-s-c-d-p-a-au-pEAlbf6Bxow-unsplash.jpg"
          />

          <FeaturedBeneficiary
            name="Beneficiary Name"
            description="A subheading for this section, as long or as short as you like"
            image="/images/pexels-ahmed-akacha-3313934-9270469.jpg"
            imagePosition="left"
          />

          <h2 className={styles.sectionTitle}>Top Beneficiaries</h2>

          <div className={styles.beneficiariesGrid}>
            <div className={styles.mainCard}>
              <BeneficiaryCard
                name="Beneficiary Name"
                description="Description of featured beneficiary"
                image="/images/pexels-anasjawed-18804681.jpg"
                large
              />
            </div>
            <div className={styles.sideCards}>
              <BeneficiaryCard
                name="Beneficiary Name"
                description="Description of top beneficiaries"
                image="/images/husniati-salma-NfQVe57WoyU-unsplash.jpg"
              />
              <BeneficiaryCard
                name="Beneficiary Name"
                description="Description of top beneficiaries"
                image="/images/pexels-quintingellar-4957356.jpg"
              />
            </div>
          </div>

          <h2 className={styles.sectionTitle}>Statistics</h2>

          <div className={styles.statistics}>
            <div className={styles.statisticsColumn}>
              <StatisticItem
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cb1b98606ce86440051a74288c9752f51ade6de3?placeholderIfAbsent=true&apiKey=8ca953f9337749bba5ccd2e7e6561214"
                title="Statistics 1"
                description="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
              />
              <StatisticItem
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2b657be0be0efbf16145b27fe3d05d15e0e13f57?placeholderIfAbsent=true&apiKey=8ca953f9337749bba5ccd2e7e6561214"
                title="Statistics 4"
                description="Body text for whatever you'd like to claim. Add main takeaway points, quotes, anecdotes, or even a very very short story."
              />
            </div>
            <div className={styles.statisticsColumn}>
              <StatisticItem
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fa7fb1327aeab87a8549c0231eda387f3f5fc729?placeholderIfAbsent=true&apiKey=8ca953f9337749bba5ccd2e7e6561214"
                title="Statistics 2"
                description="Body text for whatever you'd like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story."
              />
              <StatisticItem
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/17cc5ace1813a6b7faa4aad39eab48369c44cf37?placeholderIfAbsent=true&apiKey=8ca953f9337749bba5ccd2e7e6561214"
                title="Statistics 3"
                description="Body text for whatever you'd like to type. Add main takeaway points, quotes, anecdotes, or even a very very short story."
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Beneficiaries;
