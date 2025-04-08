"use client";
import React from "react";
import styles from "./SignInPage.module.css";
import Header from "./Header";
import SignInForm from "./SignInForm";
import Footer from "./Footer";

const SignInPage = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <div className={styles.page}>
        <Header />
        <SignInForm />
        <Footer />
      </div>
    </>
  );
};

export default SignInPage;
