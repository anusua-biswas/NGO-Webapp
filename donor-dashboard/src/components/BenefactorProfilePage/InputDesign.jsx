"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Header from "./Header";
import ProfileForm from "./ProfileForm";
import Footer from "./Footer";

const InputDesign = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ProfileForm />
      <Footer />
    </div>
  );
};

export default InputDesign;
