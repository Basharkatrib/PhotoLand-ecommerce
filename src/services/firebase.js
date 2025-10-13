// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUCwvIukXAUVGW86juded41JA0A5dwq4w",
  authDomain: "photoland-17ef8.firebaseapp.com",
  projectId: "photoland-17ef8",
  storageBucket: "photoland-17ef8.firebasestorage.app",
  messagingSenderId: "722094220185",
  appId: "1:722094220185:web:3f3ebbedd5a9d6702ba908",
  measurementId: "G-9EQ2LD3979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);