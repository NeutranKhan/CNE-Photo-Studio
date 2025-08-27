// lib/firebaseConfig.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIXe_00We7Z_aSORwuedCLCMmO1xB_SMA",
  authDomain: "cne-photo-studio.firebaseapp.com",
  projectId: "cne-photo-studio",
  storageBucket: "cne-photo-studio.appspot.com",
  messagingSenderId: "162683310533",
  appId: "1:162683310533:web:4ded8b7c3a04eb78a97bac",
  measurementId: "G-C326S01CMF"
};

// Initialize Firebase (avoid duplicate initialization in Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export them so you can import anywhere in your app
export { app, db, auth, storage };
