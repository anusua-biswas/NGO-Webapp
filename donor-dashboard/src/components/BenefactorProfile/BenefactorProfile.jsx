"use client";
import React, { useState, useEffect } from "react";
import styles from "./InputDesign.module.css";

// Firebase
import { db } from "../firebase/firebase.js";
import {
  collection,
  addDoc,
  onSnapshot
} from "firebase/firestore"; // ❌ Removed getDocs since it's unused

const BenefactorProfile = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");

  const benefactorId = "donor_1"; // could be dynamic later
  const projectsCollectionRef = collection(db, "donors", benefactorId, "projects");

  // Fetch projects on load
  useEffect(() => {
    const unsubscribe = onSnapshot(projectsCollectionRef, (snapshot) => {
      const projectsData = snapshot.docs.map((doc) => doc.data().name);
      setProjects(projectsData);
    });

    return () => unsubscribe();
  }, [projectsCollectionRef]); // ✅ Included projectsCollectionRef as a dependency

  const handleAddProject = async () => {
    if (newProject.trim() === "") return;

    try {
      await addDoc(projectsCollectionRef, { name: newProject });
      setNewProject(""); // Clear input after adding
    } catch (error) {
      console.error("Error adding project: ", error);
    }
  };

  return (
    <section className={styles.benefactorSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/81f8a22e2d767a93ce958ca5696e3cb65e275ed8"
        alt="Benefactor"
        className={styles.benefactorImage}
      />
      <article className={styles.benefactorDetails}>
        <h2 className={styles.benefactorName}>Benefactor Name</h2>
        <p className={styles.benefactorRank}>Top Benefactor #1</p>
        <h3 className={styles.projectLabel}>Projects Benefited :</h3>

        <ul className={styles.projectList}>
          {projects.map((project, index) => (
            <li key={index} className={styles.projectDescription}>
              {project}
            </li>
          ))}
        </ul>

        <div className={styles.addProjectContainer}>
          <input
            type="text"
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
            placeholder="Add a new project..."
            className={styles.inputField}
          />
          <button onClick={handleAddProject} className={styles.addButton}>
            Add Project
          </button>
        </div>

        <button className={styles.connectButton}>Connect</button>
        <p className={styles.followText}>Follow</p>
      </article>
    </section>
  );
};

export default BenefactorProfile;
