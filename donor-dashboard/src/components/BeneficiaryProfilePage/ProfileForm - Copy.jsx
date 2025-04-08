"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import FormInput from "./FormInput";

const ProfileForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className={styles.profileForm}>
      <div className={styles.formGrid}>
        <FormInput
          label="First name"
          value="Shuvajyoti"
          className={styles.input}
        />
        <FormInput label="Last name" value="Kar" className={styles.input} />
        <FormInput
          label="Email address"
          type="email"
          value="shuvajyoti.kar.official@gmail.com"
          className={styles.input}
          style={{ gridColumn: "span 2" }}
        />
        <FormInput label="Created By" className={styles.input} />
        <FormInput label="Mission Statement" className={styles.input} />
        <FormInput label="Website" type="url" className={styles.input} />
        <FormInput label="Address" className={styles.input} />
        <FormInput
          label="Document Upload"
          type="file"
          className={styles.input}
        />
        <FormInput label="Apply for Verification" className={styles.input} />
        <FormInput label="Add Project" className={styles.input} />
        <FormInput label="Add Your Article" className={styles.input} />
        <FormInput label="Password" type="password" className={styles.input} />
        <FormInput
          label="Confirm Password"
          type="password"
          className={styles.input}
        />
        <div className={styles.submitWrapper}>
          <button type="submit" className={styles.submitButton}>
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
