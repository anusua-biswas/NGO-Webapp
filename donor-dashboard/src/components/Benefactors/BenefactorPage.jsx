"use client";
import React from "react";
import styles from "./BenefactorPage.module.css";
import Header from "./Header";
import BenefactorCard from "./BenefactorCard";
import Footer from "./Footer";

function BenefactorPage() {
  const benefactors = [
    {
      id: 1,
      name: "Benefactor Name",
      rank: "Top Benefactor #1",
      projectDescription: "Body text for describing",
      imageUrl:
        "/images/pexels-shvetsa-3727469.jpg",
    },
    {
      id: 2,
      name: "Benefactor Name",
      rank: "Top Benefactor #1",
      projectDescription: "Body text for describing",
      imageUrl:
        "/images/pexels-divinetechygirl-1181534.jpg",
    },
    {
      id: 3,
      name: "Benefactor Name",
      rank: "Top Benefactor #1",
      projectDescription: "Body text for describing",
      imageUrl:
        "/images/pexels-olly-926390.jpg",
    },
  ];

  return (
    <main className={styles.pageContainer}>
      <Header />

      <section className={styles.mainContent}>
        {/* Featured Benefactor */}
        <BenefactorCard benefactor={benefactors[0]} featured={true} />

        <h2 className={styles.sectionTitle}>Our Benefactor List</h2>

        {/* Additional Benefactors */}
        {benefactors.slice(1).map((benefactor) => (
          <BenefactorCard key={benefactor.id} benefactor={benefactor} />
        ))}
      </section>

      <Footer />
    </main>
  );
}

export default BenefactorPage;
