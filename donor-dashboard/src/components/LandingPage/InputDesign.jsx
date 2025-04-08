"use client";
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import React Router
import styles from "./InputDesign.module.css";
// InputDesign.jsx
import { useAuth } from '../firebase/AuthContext';  // Corrected path // Two levels up, then into firebase;

import Header from "./Header";
import HeroSection from "./HeroSection";
import ProfileSection from "./ProfileSection";
import ArticlesSection from "./ArticlesSection";
import FeedbackSection from "./FeedbackSection";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
// Import useAuth Hook

function InputDesign() {
  const navigate = useNavigate(); // ✅ Initialize navigate function
  const { currentUser } = useAuth(); // Access currentUser from AuthContext

  const handleRegisterClick = () => {
    navigate("/signup"); // ✅ Navigate to signup page
  };

  const handleSignInClick = () => {
      navigate("/signin"); //Navigate to signin page
  };

  return (
    <main className={styles.mainContainer}>
      <Header />

      {/* Conditional rendering based on authentication state */}
      {currentUser ? (
        <>
          {/* Content for logged-in users */}
          <p style={{ textAlign: "center", margin: "10px" }}>
            Welcome, {currentUser.email}!
          </p>
          <HeroSection />
          <ProfileSection
            title="Top Benefactors"
            profiles={[
              {
                image: "/images/pexels-tima-miroshnichenko-6694968.jpg",
                title: "Profile 1",
                description: "Body text for whatever you'd like to add more to the subheading.",

              },
              {
                image:
                  "/images/pexels-ketut-subiyanto-4623471.jpg",
                title: "Profile 2",
                description:
                  "Body text for whatever you'd like to expand on the main point.",
              },
              {
                image:
                  "/images/pexels-tima-miroshnichenko-6693656.jpg",
                title: "Profile 3",
                description: "Body text for whatever you'd like to share more.",
              },
            ]}
          />
          <ProfileSection
            title="Top Beneficiaries"
            profiles={[
              {
                image:
                  "/images/team-6556439_1280.jpg",
                title: "Profile 1",
                description:
                  "Body text for whatever you'd like to add more to the subheading.",
              },
              {
                image:
                  "/images/nichika-sakurai-sVXSS39R1uA-unsplash.jpg",
                title: "Profile 2",
                description:
                  "Body text for whatever you'd like to expand on the main point.",
              },
              {
                image:
                  "/images/rakhmat-suwandi-8HkI237bdvc-unsplash.jpg",
                title: "Profile 3",
                description: "Body text for whatever you'd like to share more.",
              },
            ]}
            showButtons={true}
          />
          <ArticlesSection />
          <FeedbackSection />
          <CallToAction />
        </>
      ) : (
        <>
          {/* Content for non-logged-in users */}
          <section className={styles.heroImageContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa164568db6fc8332b95031d9df9f3fa4b47c7c"
              alt="Hero image"
              className={styles.heroImage}
            />
          </section>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <button className={styles.registerButton} onClick={handleRegisterClick}>
              Register
            </button>
            <button className={styles.registerButton} onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
        </>
      )}

      <Footer />
    </main>
  );
}

export default InputDesign;
