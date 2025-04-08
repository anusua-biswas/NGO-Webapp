"use client";
import React from "react";
import styles from "./FormInput.module.css";

const FormInput = ({ label, type = "text", value, ...props }) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel}>{label}</label>
      <input
        type={type}
        value={value}
        className={styles.inputField}
        {...props}
      />
    </div>
  );
};

export default FormInput;
