"use client";
import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, ...props }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} {...props} />
    </div>
  );
};

export default Input;
