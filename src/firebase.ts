// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZXfcjdRyqx-aGTlytyR5SRJQTiclwKEs",
  authDomain: "gaabymore.firebaseapp.com",
  projectId: "gaabymore",
  storageBucket: "gaabymore.firebasestorage.app",
  messagingSenderId: "1030579878864",
  appId: "1:1030579878864:web:acdf2ff2f7a8aeba0a97d5",
  measurementId: "G-CNBQXJ9VBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };