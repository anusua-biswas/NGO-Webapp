"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const FormInput = ({ label, type = "text", value, className, ...props }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.inputLabel}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          value={value}
          className={`${styles.formInput} ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default FormInput;
