"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebase"; // Import Firebase auth and Firestore
import { doc, getDoc } from "firebase/firestore";

const Header = () => {
  const navigate = useNavigate();

  const handleProfileClick = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        console.error("No user is logged in.");
        navigate("/SignIn"); // Redirect to sign-in if not logged in
        return;
      }

      // Fetch user data from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userType = userDoc.data().userType;

        // Redirect to the respective profile page based on user type
        if (userType === "benefactors") {
          navigate("/BenefactorProfilePage");
        } else if (userType === "beneficiary") {
          navigate("/BeneficiaryProfilePage");
        } else {
          console.error("Unknown user type:", userType);
        }
      } else {
        console.error("User data not found.");
      }
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <a href="/LandingPage" className={styles.navLink}>
          Home
        </a>
      </h1>
      <nav className={styles.navigation}>
        <a href="/Articles" className={styles.navLink}>
          Articles
        </a>
        <a href="/BenefactorPage" className={styles.navLink}>
          Benefactors
        </a>
        <a href="/Beneficiaries" className={styles.navLink}>
          Beneficiary
        </a>
        <a href="/AboutUs" className={styles.navLink}>
          About Us
        </a>
        <button onClick={handleProfileClick} className={styles.profileButton}>
          Profile
        </button>
      </nav>
      <button className={styles.mobileMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[24px] h-[24px]"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
