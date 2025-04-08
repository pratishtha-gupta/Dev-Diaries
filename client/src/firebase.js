// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c4e05.firebaseapp.com",
  projectId: "mern-blog-c4e05",
  storageBucket: "mern-blog-c4e05.firebasestorage.app",
  messagingSenderId: "12526074302",
  appId: "1:12526074302:web:08dc70115914e9001de1ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);