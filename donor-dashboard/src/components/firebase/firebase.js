import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZP-SbmSgaxoP0Ev7HSPklhWSLymsHm08",
  authDomain: "webapp-7777.firebaseapp.com",
  projectId: "webapp-7777",
  storageBucket: "webapp-7777.appspot.com",
  messagingSenderId: "240402616058",
  appId: "1:240402616058:web:1a4bda8bddb43d5f8a4343",
  measurementId: "G-6FJ23RX4DJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);