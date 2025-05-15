
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "meerkatapp-47830.firebaseapp.com",
  projectId: "meerkatapp-47830",
  storageBucket: "meerkatapp-47830.firebasestorage.app",
  messagingSenderId: "513055468012",
  appId: "1:513055468012:web:768f955ddb7832d3ffb8c9",
  measurementId: "G-T3DXRKQXSH"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const analytics = getAnalytics(app);