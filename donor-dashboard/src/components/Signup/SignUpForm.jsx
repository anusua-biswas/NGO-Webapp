"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import { auth, db } from "../firebase/firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import styles from "./SignUpForm.module.css";
import Input from "./Input";
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";

const SignUpForm = () => {
  const navigate = useNavigate(); // React Router hook for navigation
  const [userType, setUserType] = useState("benefactors");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Ensure correct Firestore collection names
      let collectionName = "";
      if (userType === "benefactors") {
        collectionName = "donors";
      } else {
        collectionName = "ngos";
      }

      // Save user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        userType,
        password
      });

      await setDoc(doc(db, collectionName, user.uid), {
        firstName,
        lastName,
        email,
        password
      });

      console.log("✅ User registered successfully:", { userType, collectionName });

      // Redirect to the appropriate profile page
      const redirectPath = userType === "benefactors" ? "/BenefactorProfilePage" : "/BeneficiaryProfilePage";
      navigate(redirectPath);

    } catch (error) {
      console.error("❌ Error signing up:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <Header /> {/* Ensure Header appears */}

      <section className={styles.formSection}>
        <h2 className={styles.title}>Sign up</h2>

        {/* User Type Selector */}
        <div className={styles.tabs}>
          <button
            className={`${styles.userTypeButton} ${userType === "benefactors" ? styles.active : ""}`}
            onClick={() => setUserType("benefactors")}
          >
            Benefactors
          </button>
          <button
            className={`${styles.userTypeButton} ${userType === "beneficiary" ? styles.active : ""}`}
            onClick={() => setUserType("beneficiary")}
          >
            Beneficiary
          </button>
        </div>

        {/* Error Message */}
        {error && <p className={styles.error}>{error}</p>}

        {/* Sign-up Form */}
        <form className={styles.form} onSubmit={handleSignup}>
          <div className={styles.inputRow}>
            <Input label="First name" type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <Input label="Last name" type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          <Input label="Email address" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />

          <div className={styles.inputRow}>
            <Input label="Password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input label="Confirm Password" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>

          <Button type="submit">Sign Up</Button>
        </form>
      </section>

      <Footer /> {/* Ensure Footer appears */}
    </>
  );
};

export default SignUpForm;
