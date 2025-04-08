"use client";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { doc, updateDoc, getDoc, Timestamp } from "firebase/firestore";
import { auth } from "../firebase/firebase";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth"; 
import styles from "./ProfileForm.module.css";
import FormInput from "./FormInput";
import { serverTimestamp } from "firebase/firestore";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    website: "",
    totalAmountDonated: 0,
    causes: "",
    article: "",
    password: "",
    confirmPassword: "",
  });

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserId(currentUser.uid);
      fetchUserData(currentUser.uid);
    } else {
      alert("❌ User not logged in.");
      setLoading(false);
    }
  }, []);

  const fetchUserData = async (uid) => {
    try {
      const donorDoc = await getDoc(doc(db, "donors", uid));
      if (donorDoc.exists()) {
        setFormData(donorDoc.data());
      } else {
        alert("❌ User profile not found.");
      }
    } catch (error) {
      alert("❌ Error fetching user data.");
      console.error(error.message);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert("❌ User not found. Please log in again.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      alert("❌ User not logged in.");
      return;
    }

    try {
      setLoading(true);

      // 🔥 Securely reauthenticate the user
      const credential = EmailAuthProvider.credential(user.email, formData.password);
      await reauthenticateWithCredential(user, credential);

      // ✅ If reauthentication is successful, update profile
      await updateDoc(doc(db, "donors", userId), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        address: formData.address,
        website: formData.website,
        totalAmountDonated: parseFloat(formData.totalAmountDonated),
        causes: formData.causes,
        article: formData.article,
        updatedAt: serverTimestamp(),
      });

      alert("✅ Profile updated successfully!");
    } catch (error) {
      alert("❌ Incorrect password! Please enter the correct password to update your profile.");
      console.error(error.message);
    }
    setLoading(false);
  };

  return (
    <section className={styles.formSection}>
      <h2 className={styles.title}>Update Your Profile</h2>
      <h4>Benefactor</h4>
      {loading && <p className={styles.loading}>Loading...</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <FormInput label="First name" name="firstName" value={formData.firstName} disabled />
          <FormInput label="Last name" name="lastName" value={formData.lastName} disabled />
          <FormInput label="Email address" type="email" name="email" value={formData.email} disabled />
          <FormInput label="Address" name="address" value={formData.address} onChange={handleChange} />
          <FormInput label="Website" type="url" name="website" value={formData.website} onChange={handleChange} />
          <FormInput label="Donation Amounts (Till Date)" name="totalAmountDonated" value={formData.totalAmountDonated} onChange={handleChange} />
          <FormInput label="Causes You Align Towards" name="causes" value={formData.causes} onChange={handleChange} />
          <FormInput label="Add Your Article" name="article" value={formData.article} onChange={handleChange} />
          <FormInput label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
          <FormInput label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <button type="submit" className={styles.submitButton} disabled={loading}>{loading ? "Updating..." : "Update"}</button>
      </form>
    </section>
  );
};

export default ProfileForm;