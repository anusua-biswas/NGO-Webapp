"use client";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import styles from "./InputDesign.module.css";
import FormInput from "./FormInput";
import { serverTimestamp } from "firebase/firestore";


const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createdBy: "",
    missionStatement: "",
    website: "",
    address: "",
    addProject: "",
    addArticle: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          alert("❌ User not logged in.");
          setLoading(false);
          return;
        }

        const ngoDocRef = doc(db, "ngos", user.uid);
        const docSnap = await getDoc(ngoDocRef);

        if (docSnap.exists()) {
          setFormData({ ...docSnap.data(), email: user.email });
        } else {
          alert("❌ NGO profile not found.");
        }
      } catch (err) {
        alert("❌ Error fetching profile.");
        console.error(err);
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert("❌ User not logged in.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      // 🔐 Securely reauthenticate user
      const credential = EmailAuthProvider.credential(user.email, formData.password);
      await reauthenticateWithCredential(user, credential);

      // ✅ Update NGO profile in Firestore
      const ngoDocRef = doc(db, "ngos", user.uid);
      await updateDoc(ngoDocRef, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        createdBy: formData.createdBy,
        missionStatement: formData.missionStatement,
        website: formData.website,
        address: formData.address,
        addProject: formData.addProject,
        addArticle: formData.addArticle,
        updatedAt: serverTimestamp(),
      });

      alert("✅ Profile updated successfully!");
    } catch (err) {
      alert("❌ Incorrect password! Please enter the correct password to update your profile.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.profileForm}>
      <div className={styles.formGrid}>
        {loading && <p className={styles.loading}>Loading...</p>}

        <FormInput label="First name" name="firstName" value={formData.firstName} disabled className={styles.input} />
        <FormInput label="Last name" name="lastName" value={formData.lastName} disabled className={styles.input} />
        <FormInput label="Email address" type="email" value={formData.email} disabled className={styles.input} style={{ gridColumn: "span 2" }} />
        <FormInput label="Created By" name="createdBy" value={formData.createdBy} onChange={handleChange} className={styles.input} />
        <FormInput label="Mission Statement" name="missionStatement" value={formData.missionStatement} onChange={handleChange} className={styles.input} />
        <FormInput label="Website" name="website" type="url" value={formData.website} onChange={handleChange} className={styles.input} />
        <FormInput label="Address" name="address" value={formData.address} onChange={handleChange} className={styles.input} />
        <FormInput label="Add Project" name="addProject" value={formData.addProject} onChange={handleChange} className={styles.input} />
        <FormInput label="Add Your Article" name="addArticle" value={formData.addArticle} onChange={handleChange} className={styles.input} />
        <FormInput label="Password" name="password" type="password" value={formData.password} onChange={handleChange} className={styles.input} />
        <FormInput label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} className={styles.input} />
        
        <div className={styles.submitWrapper}>
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;