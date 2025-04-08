import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import styles from "./Header.module.css";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();
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
            setUserType("benefactor");
            return;
          }

          // Check the "ngos" collection
          const ngoDoc = await getDoc(doc(db, "ngos", uid));
          if (ngoDoc.exists()) {
            setUserType("beneficiary");
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
    if (userType === "beneficiary") {
      navigate("/BeneficiaryProfilePage");
    } else if (userType === "benefactor") {
      navigate("/BenefactorProfilePage");
    } else {
      alert("Unable to determine profile page!");
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
        <ul className={styles.navList}>
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
          <li>
            <Button variant="primary" onClick={handleProfileClick}>
              Profile
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
