"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Header from "./Header";
import SignUpForm from "./SignUpForm";
import Footer from "./Footer";

const InputDesign = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <Header />
        <SignUpForm />
        <Footer />
      </main>
    </>
  );
};

export default InputDesign;
