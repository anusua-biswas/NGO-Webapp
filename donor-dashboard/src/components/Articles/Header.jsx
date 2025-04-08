import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function Header() {
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
            console.log("User type set to donor");
            return;
          }

          // Check the "ngos" collection
          const ngoDoc = await getDoc(doc(db, "ngos", uid));
          if (ngoDoc.exists()) {
            setUserType("ngo");
            console.log("User type set to ngo");
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
    console.log("User type on profile click:", userType);
    if (userType === "donor") {
      window.location.href = "/BenefactorProfilePage";
    } else if (userType === "ngo") {
      window.location.href = "/BeneficiaryProfilePage";
    } else {
      alert("Unable to determine profile page!");
    }
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>
        <a href="/LandingPage" className={styles.navLink}>
          Home
        </a>
      </h2>
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
        <button onClick={handleProfileClick} className={styles.ProfileButton}>
          Profile
        </button>
      </nav>
    </header>
  );
}

export default Header;
