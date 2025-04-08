"use client";
import React, { useEffect, useState } from "react";
import styles from "./AboutUs.module.css";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const Navigation = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const uid = user.uid;
          const db = getFirestore();

          // Check the "donors" collection
          const donorDoc = await getDoc(doc(db, "donors", uid));
          if (donorDoc.exists()) {
            setUserType("donor");
            return;
          }

          // Check the "ngos" collection
          const ngoDoc = await getDoc(doc(db, "ngos", uid));
          if (ngoDoc.exists()) {
            setUserType("ngo");
            return;
          }

          alert("User type not recognized!");
        } else {
          alert("No user logged in!");
        }
      } catch (error) {
        console.error("Error fetching user type:", error);
      }
    };

    fetchUserType();
  }, []);

  const handleProfileClick = () => {
    if (userType === "donor") {
      window.location.href = "/BenefactorProfilePage";
    } else if (userType === "ngo") {
      window.location.href = "/BeneficiaryProfilePage";
    } else {
      alert("Unable to determine profile page!");
    }
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <h1 className={styles.webApp}>
          <a href="/LandingPage" className={styles.navLink}>
            Home
          </a>
        </h1>
        <ul className={styles.items}>
          <li>
            <a href="/Articles" className={styles.navLink}>
              Articles
            </a>
          </li>
          <li>
            <a href="/BenefactorPage" className={styles.navLink}>
              Benefactors
            </a>
          </li>
          <li>
            <a href="/Beneficiaries" className={styles.navLink}>
              Beneficiary
            </a>
          </li>
          <li>
            <a href="/AboutUs" className={styles.navLink}>
              About Us
            </a>
          </li>
          <button
                    className={styles.registerButton}
                    onClick={handleProfileClick}
                  >
                    Profile
                  </button>
        </ul>
      </div>
    </nav>
  );
};
