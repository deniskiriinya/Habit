// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgBjBH2MpspxUuIkdNhL6o_94gUZI0LRk",
  authDomain: "habitude-9c3b2.firebaseapp.com",
  projectId: "habitude-9c3b2",
  storageBucket: "habitude-9c3b2.appspot.com",
  messagingSenderId: "338401166651",
  appId: "1:338401166651:web:5eb2880538305b64d9631e",
  measurementId: "G-73G4STM049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
