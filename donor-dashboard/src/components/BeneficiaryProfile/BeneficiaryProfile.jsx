import React from "react";
import styles from "./BeneficiaryProfile.module.css";
import Button from "./Button";

const BeneficiaryProfile = () => {
  return (
    <section className={styles.profileSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c583911add5829eed1ece859d5a6af9198b3b967"
        alt="Beneficiary"
        className={styles.beneficiaryImage}
      />
      <article className={styles.profileContent}>
        <h2 className={styles.name}>Beneficiary Name</h2>
        <p className={styles.category}>Top Beneficiary #1</p>
        <h3 className={styles.projectTitle}>Project Benefited :</h3>
        <p className={styles.description}>Body text for describing</p>
        <div className={styles.actions}>
          <Button variant="primary" fullWidth>
            Engage
          </Button>
          <Button variant="secondary" fullWidth>
            Follow
          </Button>
        </div>
      </article>
    </section>
  );
};

export default BeneficiaryProfile;
