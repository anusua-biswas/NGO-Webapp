"use client";
import React from "react";
import styles from "./AboutUs.module.css";
import { Navigation } from "./Navigation";
import { AboutUsContent } from "./AboutUsContent";
import { Footer } from "./Footer";

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <Navigation />
      <AboutUsContent />
      <Footer />
    </div>
  );
}

export default AboutUs;
