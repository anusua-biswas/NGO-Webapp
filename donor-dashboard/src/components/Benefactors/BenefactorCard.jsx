import React from "react";
import styles from "./BenefactorPage.module.css";

function BenefactorCard({ benefactor, featured }) {
  return (
    <article className={styles.benefactorCard}>
      <div className={styles.benefactorImageWrapper}>
        <img
          src={benefactor.imageUrl}
          alt="Benefactor"
          className={styles.benefactorImage}
        />
      </div>
      <div className={styles.benefactorInfo}>
        <h3 className={styles.benefactorName}>{benefactor.name}</h3>
        <p className={styles.benefactorRank}>{benefactor.rank}</p>
        <h4 className={styles.projectTitle}>Project Benefited :</h4>
        <p className={styles.projectDescription}>
          {benefactor.projectDescription}
        </p>
        <button className={styles.connectButton}>Connect</button>
        <p className={styles.followText}>Follow</p>
      </div>
    </article>
  );
}

export default BenefactorCard;
