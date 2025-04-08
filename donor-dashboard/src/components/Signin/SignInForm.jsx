"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase"; // Import Firebase auth and Firestore
import styles from "./SignInForm.module.css";
import Input from "./Input";
import Button from "./Button";

const SignInForm = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("benefactors");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset errors

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user);

      // Fetch user data from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const storedUserType = userDoc.data().userType;

        // Check if the user type matches the one stored in Firestore
        if (storedUserType === userType) {
          navigate("/LandingPage"); // Redirect to LandingPage
        } else {
          setError(
            `User type mismatch: Expected '${storedUserType}', but got '${userType}'. Please select the correct user type.`
          );
        }
      } else {
        setError("User data not found. Please try again.");
      }
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <main className={styles.mainContent}>
      <h1 className={styles.title}>Sign In</h1>

      {/* User Type Selection */}
      <div className={styles.userTypeSelector}>
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

      {/* Display Error Message */}
      {error && <p className={styles.errorMessage}>{error}</p>}

      {/* Sign-in Form */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">Login</Button>
      </form>
    </main>
  );
};

export default SignInForm;
