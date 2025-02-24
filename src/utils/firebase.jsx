// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZy9pGupeS15GCCP64FvE4veNqXUQ6Mjc",
  authDomain: "flix-gpt-df676.firebaseapp.com",
  projectId: "flix-gpt-df676",
  storageBucket: "flix-gpt-df676.firebasestorage.app",
  messagingSenderId: "788929056280",
  appId: "1:788929056280:web:8e38edb044286521887d6d",
  measurementId: "G-7V9XNCVQ1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();