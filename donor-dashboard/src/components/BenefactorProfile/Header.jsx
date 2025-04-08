import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import styles from "./InputDesign.module.css";

const Header = () => {
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
    <header className={styles.headerContainer}>
      <nav className={styles.navWrapper}>
        <h1 className={styles.logo}>
          <a href="/LandingPage" className={styles.navLink}>
            Home
          </a>
        </h1>
        <div className={styles.navLinks}>
          <Link to="/Article" className={styles.navLink}>
            Articles
          </Link>
          <Link to="/BenefactorPage" className={styles.navLink}>
            Benefactors
          </Link>
          <Link to="/Beneficiaries" className={styles.navLink}>
            Beneficiary
          </Link>
          <Link to="/AboutUs" className={styles.navLink}>
            About Us
          </Link>
          <button onClick={handleProfileClick} className={styles.profileButton}>
            Profile
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
