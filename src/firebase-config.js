
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCn7--NFZ2Hxz6dLHxHa8mUnEUPz4QVhsI",
  authDomain: "meerkatapp-47830.firebaseapp.com",
  projectId: "meerkatapp-47830",
  storageBucket: "meerkatapp-47830.firebasestorage.app",
  messagingSenderId: "513055468012",
  appId: "1:513055468012:web:768f955ddb7832d3ffb8c9",
  measurementId: "G-T3DXRKQXSH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);