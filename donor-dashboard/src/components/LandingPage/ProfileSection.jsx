"use client";
import React from "react";
import styles from "./ProfileSection.module.css";

function ProfileSection({ title, profiles, showButtons = false }) {
  return (
    <section className={styles.profileSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.profileGrid}>
        {profiles.map((profile, index) => (
          <article key={index} className={styles.profileCard}>
            <img
              src={profile.image}
              alt={profile.title}
              className={styles.profileImage}
            />
            <div className={styles.profileInfo}>
              <h3 className={styles.profileTitle}>{profile.title}</h3>
              <p className={styles.profileDescription}>{profile.description}</p>
            </div>
          </article>
        ))}
      </div>

      {showButtons && (
        <div className={styles.buttonContainer}>
          <a href="#register" className={styles.registerButton}>
            Register
          </a>
          <a href="#about" className={styles.aboutButton}>
            About Us
          </a>
        </div>
      )}
    </section>
  );
}

export default ProfileSection;
